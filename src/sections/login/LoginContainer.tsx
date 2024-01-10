import React from "react";
import { Login } from "./Login";
import { connect } from "react-redux";
import { logIn } from "../../reducers/authReduser"
import { AppRootStoreType } from "../../redux/store";

type MapDispatchToProps = {
    logIn: (email: string, password: string, rememberMe: boolean) => void
}
type MapStateToProps = {
    isLogged: boolean
}
type OwnProps = {}
type LoginContainerProps = MapStateToProps & MapDispatchToProps & OwnProps

class LoginContainer extends React.Component<LoginContainerProps> {

    render(): React.ReactNode {
        return <Login onSubmit={this.props.logIn} isLogged={this.props.isLogged}/>
    }
}

const mapStateToProps = (state: AppRootStoreType) => {
    return {
        isLogged: state.authData.isAuth
    }
}

export default connect<MapStateToProps, MapDispatchToProps, OwnProps, AppRootStoreType>(mapStateToProps, { logIn })(LoginContainer)