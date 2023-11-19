import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/Theme';
import { GlobalStyle } from './style/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from './redux/store';




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);