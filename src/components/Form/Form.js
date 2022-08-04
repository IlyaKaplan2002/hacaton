import Button from 'components/Button';
import React from 'react';
import styled from 'styled-components';

const Form = ({
  title,
  buttonTitle,
  onSubmit = () => {},
  children,
  className,
  buttonDisabled,
}) => (
  <Form.Container className={className}>
    <h2 className="title">{title}</h2>
    <form
      onSubmit={e => {
        e.preventDefault();
        if (buttonDisabled) return;
        onSubmit(e);
      }}
      className="form"
    >
      {children}
      <Button type="submit" className="submit">
        {buttonTitle}
      </Button>
    </form>
  </Form.Container>
);

Form.Container = styled.div`
  padding: 10px;
  background: #bfbebe;
  border-radius: 10px;
  position: relative;

  .title {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 20px;
  }

  .submit {
    position: absolute;
    right: 10px;
    bottom: 10px;

    &&:disabled {
      opacity: 0.3;
    }
  }
`;

export default Form;
