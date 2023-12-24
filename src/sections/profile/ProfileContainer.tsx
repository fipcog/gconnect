import React from "react"
import { ReactNode } from "react"
import { Profile } from "./Profile"
import { AppRootStoreType } from "../../redux/store"
import { connect } from "react-redux"
import { ProfileType, getProfile } from './../../reducers/profileReducer';
import { RouteComponentProps, withRouter } from "react-router-dom"
import { withRedirect } from "../../hoc/withRedirect"



type MapStateToProps = {
    profile: ProfileType
}

type MapDispatchToProps = {
    getProfile: (userId: string) => void
}

type UrlParams = {
    userId: string
}

type PropsType = RouteComponentProps<UrlParams> & MapStateToProps & MapDispatchToProps

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        this.props.getProfile(this.props.match.params.userId)
        
    }

    render(): ReactNode {
        return <Profile profile={this.props.profile}/>  
    }
}

const WithRedirectProfileComponent = withRedirect(ProfileContainer) 

const mapStateToProps = (state: AppRootStoreType) => {
    return {
        profile: state.profile.profile
    }
}

const WithUrlDataProfileContainer = withRouter(WithRedirectProfileComponent)

export default connect<MapStateToProps, MapDispatchToProps, {}, AppRootStoreType>(mapStateToProps, {getProfile})(WithUrlDataProfileContainer)