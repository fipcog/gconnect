import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/Theme';
import { GlobalStyle } from './style/GlobalStyle';

ReactDOM.render(
  <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle/>
    </ThemeProvider>
  </BrowserRouter>,

  document.getElementById('root')
);