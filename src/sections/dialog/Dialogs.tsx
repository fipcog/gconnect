import React from "react";
import { S } from "./DialogsStyles";
import { DialogMessage } from "../../components/dialogmessage/DialogMeaasge";
import { ContactsListItem } from "../../components/contactslistitem/ContactsListItem";
import { Messages, UserContacts } from "../../redux/state";
import { SendMessageTextarea } from "../../components/sendmessagetextarea/SendMessageTextarea";
import { FlexWrapper } from "../../components/FlexWrapper";


type DialogPropsTypes = {
    dialogsData: {
        messages: Messages
        userContacts: UserContacts
    }
}

export const Dialogs: React.FC<DialogPropsTypes> = ({dialogsData}) => {
    const {messages, userContacts} = dialogsData
    return (
        <S.Dialogs>
            <S.ContactsList>
                {userContacts.map(contact => <ContactsListItem  key={contact.id}
                                                                image="#" 
                                                                id={contact.id} 
                                                                name={contact.name}
                                                />
                                )
                }
            </S.ContactsList>
            <S.DialogsDesk>
                {messages.map(massage => <DialogMessage key={massage.id} 
                                                        image="#" 
                                                        userName={massage.messageAuthor}
                                                        >
                                                        {massage.message}
                                        </DialogMessage>
                            )
                }
            </S.DialogsDesk>
            <FlexWrapper justify="flex-end">
                <SendMessageTextarea width="70%" padding="30px 70px 0 20px"/>
            </FlexWrapper>
        </S.Dialogs>
    )
}