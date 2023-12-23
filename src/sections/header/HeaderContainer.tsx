import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { AppRootStoreType } from "../../redux/store";
import { AuthDataType, appAPI } from "../../API/API";
import { getAuthData } from "../../reducers/authReduser";

type MapStateToProps = {
    isAuth: boolean
}

type MapDispatchToProps = {
    getAuthData: () => void
}

type PropsType = MapStateToProps & MapDispatchToProps

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        this.props.getAuthData()
    }

    login(){
        this.props.getAuthData()
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

export default connect<MapStateToProps, MapDispatchToProps, {}, AppRootStoreType>(mapStateToProps, {getAuthData})(HeaderContainer)