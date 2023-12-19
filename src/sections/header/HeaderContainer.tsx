import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { AppRootStoreType } from "../../redux/store";
import { setAuthData } from './../../reducers/authReduser';
import { AuthDataType, appAPI } from "../../API/API";

type MapStateToProps = {
    isAuth: boolean
}

type MapDispatchToProps = {
    setAuthData: (data: AuthDataType) => void
}

type PropsType = MapStateToProps & MapDispatchToProps

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        appAPI.getAuthData().then(res => this.props.setAuthData(res.data.data))
    }

    login(){
        appAPI.getAuthData().then(res => this.props.setAuthData(res.data.data))
    }

    render(): React.ReactNode {
        return <Header login={() => this.login} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state:AppRootStoreType) => {
    return {
        isAuth: state.authData.isAuth
    }
}

export default connect<MapStateToProps, MapDispatchToProps, {}, AppRootStoreType>(mapStateToProps, {setAuthData})(HeaderContainer)