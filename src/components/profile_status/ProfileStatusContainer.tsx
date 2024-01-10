import React from "react";
import { ProfileStatus } from "./ProfileStatus";
import { AppRootStoreType } from "../../redux/store";
import { connect } from "react-redux";
import { getProfileStatus } from "../../reducers/profileReducer";
import { changeProfileStatus } from '../../reducers/profileReducer';



type MapStateToProps = {
    status: string
}

type MapDispatchToProps = {

    changeProfileStatus : (status: string) => void
}

type OwnProps = {}

type PropsType = MapStateToProps & MapDispatchToProps & OwnProps

class ProfileStatusContainer extends React.Component<PropsType> {

    render(): React.ReactNode {
        return <ProfileStatus status={this.props.status} changeProfileStatus={this.props.changeProfileStatus}/>
    }
}

const mapStateToProps = (state: AppRootStoreType) => {
    return {
        status: state.profile.profileStatus
    }
}

export default connect<MapStateToProps, MapDispatchToProps, OwnProps, AppRootStoreType>(mapStateToProps, { changeProfileStatus})(ProfileStatusContainer)