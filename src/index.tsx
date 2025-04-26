import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme';
import GlobalStyles from './styles/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
