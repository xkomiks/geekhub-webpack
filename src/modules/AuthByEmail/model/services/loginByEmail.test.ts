import axios from 'axios';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

import { loginByEmail } from './loginByEmail';
import { Dispatch } from '@reduxjs/toolkit';

describe('loginByEmail', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it('should login', async () => {
    const userData = { id: 1, username: 'test', email: 'test@gmail.com' };
    mockedAxios.post.mockReturnValue(Promise.resolve({
      data: userData
    }));

    const action = loginByEmail({ email: 'test@gmail.com', password: '123456' });
    const result = await action(dispatch, getState, undefined);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  it('should error', async () => {
    mockedAxios.post.mockReturnValue(Promise.reject({
      response: { status: 403 }
    }));

    const action = loginByEmail({ email: 'test@gmail.com', password: '123456' });
    const result = await action(dispatch, getState, undefined);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
