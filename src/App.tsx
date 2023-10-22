import React from 'react';
import './App.css';
import { SiteWrapper } from './components/SiteWrapper';
import { Header } from './sections/header/Header';
import { FlexWrapper } from './components/FlexWrapper';
import { Sidebar } from './sections/sidebar/Sidebar';
import { Main } from './sections/main/Main';
import { Messages, UserContacts, UserPosts } from '.';

export type AppData = {
  userPosts: UserPosts
  messages: Messages
  userContacts: UserContacts
}

type AppPropsTypes = {
  appData: AppData
}

function App(props: AppPropsTypes) {
  return (
    <SiteWrapper>
        <Header/>
        <FlexWrapper>
          <Sidebar/>
          <Main appData={props.appData}/>
        </FlexWrapper>
    </SiteWrapper>
  );
}

export default App;
