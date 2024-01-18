import { useState } from 'react';
import PageLayout from 'components/common/PageLayout';
import styled from 'styled-components';
import Input from 'components/common/Input';
import PasswordInput from 'components/common/PasswordInput';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: '', password: '' });

  const handleInputChange = (event) => {
    event.persist();
    setFormFields((value) => ({
      ...value,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
          value={formFields.username}
          type="text"
        />
        <PasswordInput
          name="password"
          onChange={handleInputChange}
          value={formFields.password}
        />
      </Form>
    </PageLayout>
  );
};

export default Login;
