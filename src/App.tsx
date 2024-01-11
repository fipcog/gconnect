import React from 'react';
import './App.css';
import { SiteWrapper } from './components/SiteWrapper';
import { FlexWrapper } from './components/FlexWrapper';
import { Main } from './sections/main/Main';
import HeaderContainer from './sections/header/HeaderContainer';
import SidebarContainer from './sections/sidebar/SidebarContainer';
import { connect } from 'react-redux';
import { AppRootStoreType } from './redux/store';
import { Preloader } from './components/preloader/Preloader';
import { initializeApp } from './reducers/appReducer';


type MapStateToPropsType = {
  isInitialized: boolean
}
type MapDispatchToPropsType = {
  initializeApp: () => void
}
type OwnType = {}
type AppProps = OwnType & MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component<AppProps> {
  componentDidMount(): void {
    this.props.initializeApp()
  }

  render(): React.ReactNode {
    if(!this.props.isInitialized) return <Preloader/>

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
}

const MapStateToProps = (state: AppRootStoreType) => {
  return {
    isInitialized: state.app.isInitialized
  }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnType, AppRootStoreType>(MapStateToProps, {initializeApp})(App);
