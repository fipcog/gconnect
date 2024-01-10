import React from "react";
import { S } from "./DialogsStyles";
import { DialogMessage } from "../../components/dialog_message/DialogMeaasge";
import { ContactsListItem } from "../../components/contacts_list_item/ContactsListItem";
import { SendMessageTextarea } from "../../components/send_message_textarea/SendMessageTextarea";
import { FlexWrapper } from "../../components/FlexWrapper";
import { connect } from "react-redux";
import { AppRootStoreType } from "../../redux/store";
import { Messages, UserContacts, addMessage } from '../../reducers/dialogsReducer'
import { withRedirect } from './../../hoc/withRedirect';
import DialogFormContainer from "../../components/dialogs_form/DialogFormContainer";

type MapStateToProps = {
    userContacts: UserContacts
    messages: Messages
}

type MapDispatchToProps = {
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
                    <DialogFormContainer width="70%" padding="30px 70px 0 20px"/>
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



const withRedirectDialogs = withRedirect(Dialogs)

export default connect<MapStateToProps, MapDispatchToProps, OwnProps, AppRootStoreType>(mapStateToProps, {})(withRedirectDialogs)