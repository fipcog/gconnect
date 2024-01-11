import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { AppRootStoreType } from "../../redux/store";
import { AuthDataType, appAPI } from "../../API/API";
import { getAuthData, getAuthProfile } from "../../reducers/authReduser";
import { logOut } from './../../reducers/authReduser';

type MapStateToProps = {
    isAuth: boolean,
    authUserId: number | null
}

type MapDispatchToProps = {
    getAuthData: () => void
    getAuthProfile: (id: number) => void
    logOut: () => void
}

type PropsType = MapStateToProps & MapDispatchToProps

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        // this.props.getAuthData()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        // if (this.props.authUserId) this.props.getAuthProfile(this.props.authUserId)
    }

    render(): React.ReactNode {
        return <Header logOut={this.props.logOut} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state:AppRootStoreType) => {
    return {
        isAuth: state.authData.isAuth,
        authUserId: state.authData.id
    }
}

export default connect<MapStateToProps, MapDispatchToProps, {}, AppRootStoreType>(mapStateToProps, {getAuthData, getAuthProfile, logOut})(HeaderContainer)