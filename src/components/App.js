import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'components/pages/Home';
import Login from 'components/pages/Login';
import { darkTheme, lightTheme } from 'themes';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body{
    background: ${(p) => p.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${(p) => p.theme.bodyFontColor};
    font-family: 'Kaushan Script';
  }
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((currentTheme) =>
            currentTheme.id === 'light' ? darkTheme : lightTheme
          );
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
