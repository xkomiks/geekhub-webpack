import { MainPage } from 'pages/MainPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUserActions } from 'modules/CurrentUser';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserActions.initCurrentUser());
  }, []);

  return (
    <div className="app">
      <MainPage/>
    </div>
  );
}
