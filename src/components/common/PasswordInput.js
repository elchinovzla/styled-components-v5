import { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';

const PasswordInputWrapper = styled.div`
  display: flex;
  ~ div {
    margin-bottom: 8px;
  }
`;

const PasswordInputStyled = styled(Input).attrs(() => ({
  type: 'password',
  placeholder: 'Password',
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  color: black;
  user-select: none;
  cursor: pointer;
`;

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled {...props} />
        <ToggleButton onClick={() => setShowPassword((value) => !value)}>
          {showPassword ? 'Hide' : 'Show'}
        </ToggleButton>
      </PasswordInputWrapper>
      <div>{showPassword ? props.value : ''}</div>
    </>
  );
};

export default PasswordInput;
