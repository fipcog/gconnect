import React from "react";
import { S } from "./DialogsStyles";
import { FlexWrapper } from "../../components/FlexWrapper";
import { UserImage } from "../../components/userImage/UserImage";
import { DialogMessage } from "../../components/dialogmessage/DialogMeaasge";
import { NavLink } from "react-router-dom";


export const Dialogs: React.FC = () => {
    return (
        <S.Dialogs>
            <S.ContactsList>
                <S.ContactsListItem>
                    <UserImage image="#" width="40px" height="40px"/>
                    <NavLink to="/dialogs/0">Andrew Andrew</NavLink>
                </S.ContactsListItem>
                <S.ContactsListItem>
                    <UserImage image="#" width="40px" height="40px"/>
                    <NavLink to="/dialogs/1">Dmitry Dmitry</NavLink>
                </S.ContactsListItem>
                <S.ContactsListItem>
                    <UserImage image="#" width="40px" height="40px"/>
                    <NavLink to="/dialogs/2">Sasha Sasha</NavLink>
                </S.ContactsListItem>
                <S.ContactsListItem>
                    <UserImage image="#" width="40px" height="40px"/>
                    <NavLink to="/dialogs/3">Sveta Sveta</NavLink>
                </S.ContactsListItem>
                <S.ContactsListItem>
                    <UserImage image="#" width="40px" height="40px"/>
                    <NavLink to="/dialogs/4">Victor Victor</NavLink>
                </S.ContactsListItem>
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