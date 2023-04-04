import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { MainPage } from 'pages/MainPage';
import { currentUserActions } from 'modules/CurrentUser';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserActions.initCurrentUser());
  }, []);

  return (
    <div className="app">
      <Title>
        Styled Title
      </Title>

      <MainPage/>
    </div>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
