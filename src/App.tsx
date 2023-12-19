import React from 'react';
import './App.css';
import { SiteWrapper } from './components/SiteWrapper';
import { FlexWrapper } from './components/FlexWrapper';
import { Sidebar } from './sections/sidebar/Sidebar';
import { Main } from './sections/main/Main';
import HeaderContainer from './sections/header/HeaderContainer';



function App() {
  return (
    <SiteWrapper>
        <HeaderContainer/>
        <FlexWrapper width='100%'>
          <Sidebar/>
          <Main />
        </FlexWrapper>
    </SiteWrapper>
  );
}

export default App;
