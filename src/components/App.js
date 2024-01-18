import { Button } from 'components/common';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script';
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>App</h1>
      <Button>Primary button</Button>
      <Button secondary>secondary button</Button>
      <Button disabled>Disabled button</Button>
      <Button large>Large button</Button>
    </>
  );
}

export default App;
