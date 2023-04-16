import { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'store';

import { authenticate, getAuthIsAuthenticationLoading } from 'modules/Auth';

import { MainPage } from 'pages/MainPage';

export function App() {
  const dispatch = useAppDispatch();
  const isAuthenticationLoading = useSelector(getAuthIsAuthenticationLoading);

  useEffect(() => {
    dispatch(authenticate());
  }, []);

  if (isAuthenticationLoading) {
    // TODO: Add loader here
    return null;
  }

  return (
    <div className="app">
      <MainPage/>
    </div>
  );
}
