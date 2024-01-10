import React from "react";
import { AppRootStoreType } from "../../redux/store";
import { addUserPost } from "../../reducers/profileReducer";
import { connect } from "react-redux";
import { MessageForm } from './../message_form/MessageForm';

type MapDispatchToProps = {
    addUserPost: (post: string) => void
}
type OwnProps = {
    width?: string
    padding?: string  
}
type ProfileFormContainerProps = MapDispatchToProps & OwnProps

class ProfileFormContainer extends React.Component<ProfileFormContainerProps> {

    render(): React.ReactNode {
        return <MessageForm onSubmit={this.props.addUserPost} placeholder="Type your minds"/>
    }
}

export default connect<{}, MapDispatchToProps, OwnProps, AppRootStoreType>(null, {addUserPost})(ProfileFormContainer)