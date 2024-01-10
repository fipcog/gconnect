import React from "react";
import { NavLink } from "react-router-dom";
import { S } from "./ContactsListItemStyles";
import { UserImage } from "../user_Image/UserImage";

type ContactsListItemPropsTypes = {
    image: string
    id: string
    name: string
}


export const ContactsListItem: React.FC <ContactsListItemPropsTypes> = (props) => {
    return (
        <S.ContactsListItem>
            <UserImage image={props.image} width="40px" height="40px" />
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </S.ContactsListItem>
    )
}