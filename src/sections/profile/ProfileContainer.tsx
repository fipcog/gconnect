import React from "react"
import { ReactNode } from "react"
import { Profile } from "./Profile"
import { AppRootStoreType } from "../../redux/store"
import { connect } from "react-redux"
import { ProfileType, getProfile, getProfileStatus } from './../../reducers/profileReducer';
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom"
import { withRedirect } from "../../hoc/withRedirect"
import { compose } from "redux"



type MapStateToProps = {
    profile: ProfileType
}

type MapDispatchToProps = {
    getProfile: (userId: string) => void
    getProfileStatus: (userId: string) => void
}

type UrlParams = {
    userId: string
}

type PropsType = RouteComponentProps<UrlParams> & MapStateToProps & MapDispatchToProps

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        this.props.getProfile(this.props.match.params.userId)
        this.props.getProfileStatus(this.props.match.params.userId)
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

// export default compose(
//     withRedirect,
//     withRouter,
//     connect<MapStateToProps, MapDispatchToProps, {}, AppRootStoreType>(mapStateToProps, {getProfile}),
// )(ProfileContainer)

const WithRedirectProfileComponent = withRedirect(ProfileContainer) 

const WithUrlDataProfileContainer = withRouter(WithRedirectProfileComponent)

export default connect<MapStateToProps, MapDispatchToProps, {}, AppRootStoreType>(mapStateToProps, {getProfile, getProfileStatus})(WithUrlDataProfileContainer)