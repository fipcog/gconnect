import React from "react"
import { ReactNode } from "react"
import { Profile } from "./Profile"
import { AppRootStoreType } from "../../redux/store"
import { connect } from "react-redux"
import { ProfileType, getProfile, getProfileStatus, uploadUserImage } from './../../reducers/profileReducer';
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom"
import { withRedirect } from "../../hoc/withRedirect"
import { compose } from "redux"



type MapStateToProps = {
    profile: ProfileType
    authUserId: number | null
    isLogged: boolean
}

type MapDispatchToProps = {
    getProfile: (userId: string) => void
    getProfileStatus: (userId: string) => void
    uploadUserImage: (image: File) => void
}

type UrlParams = {
    userId: string
}

type PropsType = RouteComponentProps<UrlParams> & MapStateToProps & MapDispatchToProps

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        if (this.props.match.params.userId) {
            this.props.getProfile(this.props.match.params.userId)
            this.props.getProfileStatus(this.props.match.params.userId)
        } else if (this.props.authUserId) {
            this.props.getProfile(String(this.props.authUserId))
            this.props.getProfileStatus(String(this.props.authUserId))
        }
    }

    render(): ReactNode {
        if (!this.props.isLogged) return <Redirect to={'/login'} />
        return <Profile profile={this.props.profile} isUsersPage={!this.props.match.params.userId} uploadUserImage={this.props.uploadUserImage} />
    }
}

const mapStateToProps = (state: AppRootStoreType) => {
    return {
        profile: state.profile.profile,
        authUserId: state.authData.id,
        isLogged: state.authData.isAuth
    }
}

// export default compose(
//     withRedirect,
//     withRouter,
//     connect<MapStateToProps, MapDispatchToProps, {}, AppRootStoreType>(mapStateToProps, {getProfile}),
// )(ProfileContainer)

const WithRedirectProfileComponent = withRedirect(ProfileContainer)

const WithUrlDataProfileContainer = withRouter(WithRedirectProfileComponent)

export default connect<MapStateToProps, MapDispatchToProps, {}, AppRootStoreType>(mapStateToProps, { getProfile, getProfileStatus, uploadUserImage })(WithUrlDataProfileContainer)