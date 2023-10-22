import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/Theme';
import { GlobalStyle } from './style/GlobalStyle';

export type UserPosts = {id: string, post: string}[]
const userPosts: UserPosts = [
  {
    id: '1',
    post: 'Why nobody loves me'
  },
  {
    id: '2',
    post: 'Why nobody loves'
  },
  {
    id: '3',
    post: 'Why loves me'
  },
  {
    id: '4',
    post: 'nobody loves me'
  },
]

export type Messages =  {id: string, messageAuthor: string, message: string}[]
const messages: Messages = [
  {
    id: '1',
    messageAuthor: 'Andrew Andrew', 
    message: 'Message Message Message Message Message Message Message Message Message Message Message Message Message'
  },
  {
    id: '2',
    messageAuthor: 'Dmitry Dmitry', 
    message: 'Message Message Message Message Message Message Message Message Messessage'
  },
  {
    id: '3',
    messageAuthor: 'Sasha Sasha', 
    message: 'Message Message MessaMessage Message Message Message Message Message Message'
  },
  {
    id: '4',
    messageAuthor: 'Sveta Sveta', 
    message: 'Message Message Message Message Message Message Mge Message Message Message Message'
  },
  {
    id: '5',
    messageAuthor: 'Victor Victor', 
    message: 'Message Message Message Message Message Messagee Message Message Message Message Message'
  },
]

export type UserContacts = {id: string, name: string}[]
const userContacts: UserContacts = [
  {
    id: '1',
    name: 'Andrew Andrew'
  },
  {
    id: '2',
    name: 'Dmitry Dmitry'
  },
  {
    id: '3',
    name: 'Sasha Sasha'
  },
  {
    id: '4',
    name: 'Sveta Sveta'
  },
  {
    id: '5',
    name: 'Victor Victor'
  },
]

ReactDOM.render(
  <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App appData={{userPosts, messages, userContacts}} />
        <GlobalStyle/>
    </ThemeProvider>
  </BrowserRouter>,

  document.getElementById('root')
);