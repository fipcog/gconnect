import React from "react"
import { ReactNode } from "react"
import { Profile } from "./Profile"
import { AppRootStoreType } from "../../redux/store"
import { connect } from "react-redux"
import { ProfileType, setProfile } from './../../reducers/profileReducer';
import { RouteComponentProps, withRouter } from "react-router-dom"
import axios from "axios"
import { appAPI } from "../../API/API"



type MapStateToProps = {
    profile: ProfileType
}

type MapDispatchToProps = {
    setProfile: (profile: ProfileType) => void
}

type UrlParams = {
    userId: string
}

type PropsType = RouteComponentProps<UrlParams> & MapStateToProps & MapDispatchToProps

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        appAPI.getProfile(this.props.match.params.userId)
        .then((res) => this.props.setProfile(res.data))
    }

    render(): ReactNode {
        return <Profile profile={this.props.profile}/>  
    }
}

const mapStateToProps = (state: AppRootStoreType) => {
    return {
        profile: state.profile.profile
    }
}

const WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect<MapStateToProps, MapDispatchToProps, {}, AppRootStoreType>(mapStateToProps, {setProfile})(WithUrlDataProfileContainer)