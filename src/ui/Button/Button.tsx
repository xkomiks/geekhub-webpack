import React from 'react';

import { classNames } from 'lib/classNames';

import styles from './Button.module.scss';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = ButtonVariant.Primary,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={classNames(styles.Button, styles[variant])}
    >
      {children}
    </button>
  );
};
