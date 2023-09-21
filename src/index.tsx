import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/Theme';
import { GlobalStyle } from './style/GlobalStyle';

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle/>
  </ThemeProvider>,
  document.getElementById('root')
);