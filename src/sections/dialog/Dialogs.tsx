import React from "react";
import { S } from "./DialogsStyles";
import { DialogMessage } from "../../components/dialogmessage/DialogMeaasge";
import { ContactsListItem } from "../../components/contactslistitem/ContactsListItem";
import { SendMessageTextarea } from "../../components/sendmessagetextarea/SendMessageTextarea";
import { FlexWrapper } from "../../components/FlexWrapper";
import { connect } from "react-redux";
import { AppRootStoreType } from "../../redux/store";
import { Messages, UserContacts, addMessageAC } from '../../reducers/dialogsReducer'

type MapStateToProps = {
    userContacts: UserContacts
    messages: Messages
}

type MapDispatchToProps = {
    addMessage: (message: string) => void
}

type OwnProps = {

}

type PropsType = OwnProps & MapStateToProps & MapDispatchToProps

class Dialogs extends React.Component<PropsType> {

    render(): React.ReactNode {
        return (
            <S.Dialogs>
                <S.ContactsList>
                    {this.props.userContacts.map(contact => <ContactsListItem  key={contact.id}
                                                                    image="#" 
                                                                    id={contact.id} 
                                                                    name={contact.name}
                                                    />
                                    )
                    }
                </S.ContactsList>
                <S.DialogsDesk>
                    {this.props.messages.map(massage => <DialogMessage key={massage.id} 
                                                            image="#" 
                                                            userName={massage.messageAuthor}
                                                            >
                                                            {massage.message}
                                            </DialogMessage>
                                )
                    }
                </S.DialogsDesk>
                <FlexWrapper justify="flex-end">
                    <SendMessageTextarea callback={this.props.addMessage} width="70%" padding="30px 70px 0 20px"/>
                </FlexWrapper>
            </S.Dialogs>
        )
    }
}

const mapStateToProps = (state: AppRootStoreType): MapStateToProps => {
    return {
        userContacts: state.dialogs.userContacts,
        messages: state.dialogs.messages
    }
}

const mapDispatchToProps = (dispatch: any): MapDispatchToProps => {
    return {
        addMessage: (message: string) => dispatch(addMessageAC(message))
    }
}

export default connect<MapStateToProps, MapDispatchToProps, OwnProps, AppRootStoreType>(mapStateToProps, mapDispatchToProps)(Dialogs)