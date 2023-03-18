import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LoginModal } from 'modules/AuthByEmail';
import { currentUserActions, getUserAuthData } from 'modules/CurrentUser';

import { Button } from 'ui/Button';

export const MainPage = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(getUserAuthData);

  const [showLoginModal, setShowLoginModal] = useState(false);

  const onLogout = () => {
    dispatch(currentUserActions.logout());
  };

  return (
    <div>
      <h1>Main page</h1>
      {currentUser && (
        <p>
          Hello, {currentUser.username}
        </p>
      )}
      {currentUser ? (
        <Button onClick={onLogout}>
          Logout
        </Button>
      ) : (
        <Button onClick={() => setShowLoginModal(true)}>
          Login
        </Button>
      )}
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
};
