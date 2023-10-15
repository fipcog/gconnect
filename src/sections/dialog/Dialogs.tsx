import React from "react";
import { S } from "./DialogsStyles";
import { UserImage } from "../../components/userImage/UserImage";
import { DialogMessage } from "../../components/dialogmessage/DialogMeaasge";
import { NavLink } from "react-router-dom";
import { ContactsListItem } from "../../components/contactslistitem/ContactsListItem";


export const Dialogs: React.FC = () => {
    return (
        <S.Dialogs>
            <S.ContactsList>
                <ContactsListItem image="#" id="0" name="Andrew Andrew"/>
                <ContactsListItem image="#" id="1" name="Dmitry Dmitry"/>
                <ContactsListItem image="#" id="2" name="Sasha Sasha"/>
                <ContactsListItem image="#" id="3" name="Sveta Sveta"/>
                <ContactsListItem image="#" id="4" name="Victor Victor"/>
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