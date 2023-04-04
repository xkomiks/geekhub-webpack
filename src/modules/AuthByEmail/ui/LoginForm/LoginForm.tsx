import { useSelector } from 'react-redux';
import { FormEvent } from 'react';

import { useAppDispatch } from 'store';

import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';

import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginFormData } from '../../model/selectors/getLoginFormData';
import { getLoginError } from '../../model/selectors/getLoginError';
import { loginByEmail } from '../../model/services/loginByEmail';
import { loginActions } from '../../model/slice/loginSlice';

interface LoginFormProps {
  onSuccessfulLogin?: () => void;
}

export const LoginForm = ({
  onSuccessfulLogin
}: LoginFormProps) => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const { password, email } = useSelector(getLoginFormData);

  const oChangeEmail = (value: string) => {
    dispatch(loginActions.setInputValue({ email: value }));
  };

  const oChangePassword = (value: string) => {
    dispatch(loginActions.setInputValue({ password: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await dispatch(loginByEmail({ email, password }));
    if (result.meta.requestStatus === 'fulfilled' && onSuccessfulLogin) {
      onSuccessfulLogin();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {error && (
        <p style={{ color: 'red' }}>
          {error}
        </p>
      )}
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        onChange={oChangeEmail}
        value={email}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        onChange={oChangePassword}
        value={password}
      />
      <Button disabled={isLoading}>
        Login
      </Button>
    </form>
  );
};
