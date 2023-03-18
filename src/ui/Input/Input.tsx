import React, { InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  onChange?: (value: string) => void;
}

export const Input = ({
  label,
  className,
  onChange: propOnChange,
  ...rest
}: InputProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (propOnChange) {
      propOnChange(event.target.value);
    }
  };

  return (
    <div className={className}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};
