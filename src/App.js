import { styled, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import { theme } from './style/theme.js';
import { Outlet } from 'react-router-dom';
import Header from './pages/header/Header';
import './App.css';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

function App() {
  return (
    <div className="totalcontainer">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
