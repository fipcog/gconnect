import React from 'react';
import './App.css';
import { SiteWrapper } from './components/SiteWrapper';
import { Header } from './sections/header/Header';
import { FlexWrapper } from './components/FlexWrapper';
import { Sidebar } from './sections/sidebar/Sidebar';
import { Main } from './sections/main/Main';



function App() {
  return (
    <SiteWrapper>
        <Header/>
        <FlexWrapper width='100%'>
          <Sidebar/>
          <Main />
        </FlexWrapper>
    </SiteWrapper>
  );
}

export default App;
