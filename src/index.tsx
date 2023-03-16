import { createRoot } from 'react-dom/client';

import './styles/index.scss';

import { App } from './App';
import { StoreProvider } from 'store';

const root = createRoot(document.querySelector('.root'));
root.render(
  <StoreProvider>
    <App/>
  </StoreProvider>
);
