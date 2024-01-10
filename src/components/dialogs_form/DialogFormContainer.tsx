import React from "react"
import { connect } from "react-redux";
import { addMessage } from './../../reducers/dialogsReducer';
import { AppRootStoreType } from "../../redux/store";
import { MessageForm } from './../message_form/MessageForm';


type MapDispatchToProps = {
    addMessage: (message: string) => void
}
type OwnProps = {
    width?: string
    padding?: string  
}
type DialogormContainerProps = MapDispatchToProps & OwnProps

class DialogFormContainer extends React.Component<DialogormContainerProps> {

    render(): React.ReactNode {
        return <MessageForm onSubmit={this.props.addMessage} width={this.props.width} padding={this.props.padding}/>
    }
}

export default connect<{}, MapDispatchToProps, OwnProps, AppRootStoreType>(null, {addMessage})(DialogFormContainer)