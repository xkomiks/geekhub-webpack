const fs = require('node:fs');
const path = require('node:path');

const jsonServer = require('json-server');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Треба для невеликої затримки, щоб запит не виконувався сразу, імітація реально АПІ
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

// Ендпоінт для логіна
server.post('/login', (req, res) => {
  try {
    const { users = [] } = getDatabase();

    const { email, password } = req.body;
    const userFromBd = users.find((user) => user.email === email && user.password === password);

    if (userFromBd) {
      return res.json(getUserInfo(userFromBd));
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.post('/authenticate', (req, res) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  try {
    const { users = [] } = getDatabase();

    // Because I don't validate the token, I need to know the user email
    const { email } = req.body;
    const userFromBd = users.find((user) => user.email === email);

    if (userFromBd) {
      return res.json(getUserInfo(userFromBd));
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// перевіряємо, авторизований користувач
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
  console.log('server is running on 8000 port');
});

function getUserInfo(user) {
  return {
    id: user.id,
    username: user.username,
    email: user.email
  }
}

function getDatabase() {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
}
