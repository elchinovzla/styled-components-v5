import { useState, useEffect } from 'react';
import PageLayout from 'components/common/PageLayout';
import styled from 'styled-components';
import Input from 'components/common/Input';
import PasswordInput from 'components/common/PasswordInput';
import Button from 'components/common/Button';
import Spinner from 'components/common/Spinner';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }

  > ${Button}:first-of-type {
    margin-top: 40px;
  }
`;

let timeout;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  const handleInputChange = (event) => {
    event.persist();
    setFormFields((value) => ({
      ...value,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
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
          </>
        )}
        <Button large type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
};

export default Login;
