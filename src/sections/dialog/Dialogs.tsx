import React from "react";
import { S } from "./DialogsStyles";
import { FlexWrapper } from "../../components/FlexWrapper";
import { UserImage } from "../../components/userImage/UserImage";
import { DialogMessage } from "../../components/dialogmessage/DialogMeaasge";


export const Dialogs: React.FC = () => {
    return (
        <S.Dialogs>
            <S.ContactsList>
                <S.ContactsListItem><UserImage image="#" width="40px" height="40px"/><a href="#">Andrew Andrew</a></S.ContactsListItem>
                <S.ContactsListItem><UserImage image="#" width="40px" height="40px"/><a href="#">Dmitry Dmitry</a></S.ContactsListItem>
                <S.ContactsListItem><UserImage image="#" width="40px" height="40px"/><a href="#">Sasha Sasha</a></S.ContactsListItem>
                <S.ContactsListItem><UserImage image="#" width="40px" height="40px"/><a href="#">Sveta Sveta</a></S.ContactsListItem>
                <S.ContactsListItem><UserImage image="#" width="40px" height="40px"/><a href="#">Victor Victor</a></S.ContactsListItem>
            </S.ContactsList>
            <S.DialogsDesk>
                <DialogMessage image="#" userName="Andrew Andrew">
                    Message Message Message Message Message 
                    Message Message Message Message Message 
                    Message Message Message
                </DialogMessage>
                <DialogMessage image="#" userName="Dmitry Dmitry">
                    Message Message Message Message Message 
                    Message Message Message Messessage
                </DialogMessage>
                <DialogMessage image="#" userName="Sasha Sasha">
                    Message Message MessaMessage Message Message Message 
                    Message Message Message
                </DialogMessage>
                <DialogMessage image="#" userName="Victor Victor">
                    Message Message Message Message Message 
                    Message Mge Message 
                    Message Message Message
                </DialogMessage>
            </S.DialogsDesk>
        </S.Dialogs>
    )
}