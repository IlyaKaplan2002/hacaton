import styled from 'styled-components';
import React, { useEffect } from 'react';
import { Notify } from 'notiflix';

const InputField = ({
  className,
  type,
  label,
  error,
  name,
  onChange,
  onBlur,
  value,
}) => {
  useEffect(() => {
    if (error) {
      Notify.failure(error);
    }
  }, [error]);

  return (
    <InputField.Container className={className}>
      <div className="label">{label}</div>
      <input
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        className="input"
        autoComplete="off"
      />
    </InputField.Container>
  );
};

InputField.Container = styled.label`
  .label {
    font-size: 10px;
    margin-bottom: 2px;
    line-height: 12px;
  }

  .input {
    border: none;
    outline: none;
    width: 100%;
    padding: 4px;
    border-radius: 5px;
    background: #888888;
  }
`;

export default InputField;
