import React from 'react';
import './App.css';
import { SiteWrapper } from './components/SiteWrapper';
import { FlexWrapper } from './components/FlexWrapper';
import { Main } from './sections/main/Main';
import HeaderContainer from './sections/header/HeaderContainer';
import SidebarContainer from './sections/sidebar/SidebarContainer';



function App() {
  return (
    <SiteWrapper>
        <HeaderContainer/>
        <FlexWrapper width='100%'>
          <SidebarContainer/>
          <Main />
        </FlexWrapper>
    </SiteWrapper>
  );
}

export default App;
