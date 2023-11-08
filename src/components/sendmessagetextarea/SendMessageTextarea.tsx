import React from "react";
import { S } from "./SendMessageTextareaStyles";

type SendMessageTextarea = {
    placeholder?: string
    width?: string
    padding?: string
}

export const SendMessageTextarea: React.FC<SendMessageTextarea> = (props) => {
    return(
        <S.SendMessageTextarea width={props.width} padding={props.padding}>
            <S.TextArea placeholder={props.placeholder ? props.placeholder : 'Type your minds'}/>
            <S.PostBtn>Send</S.PostBtn>
        </S.SendMessageTextarea>
    )
}