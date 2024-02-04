import React from "react";
import { S } from "./DialogMessageStyles";
import { UserImage } from "../user_Image/UserImage";
import { FlexWrapper } from "../FlexWrapper";
import defaultImage from "../../assets/defaultUserAvatarImage.png"

type DialogMessagePropsTypes = {
    image?: string
    userName: string
    children: string
}

export const DialogMessage: React.FC<DialogMessagePropsTypes> = (props) => {
    return (
        <S.DialogMessage>
            <FlexWrapper direction="column" width="140px" align="center" gap="5px">
                <UserImage image={props.image || defaultImage} width="40px" height="40px" />
                <S.UserName><a href="#">{props.userName}</a></S.UserName>
            </FlexWrapper>
            <S.UserMessage>{props.children}</S.UserMessage>
        </S.DialogMessage>
    )
}