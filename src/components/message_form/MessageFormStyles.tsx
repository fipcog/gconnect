import styled from "styled-components"
import { theme } from "../../style/Theme"
import { Button } from "../Button"

type SendMessageFormStyles = {
    width?: string
    padding?: string
}

const SendMessageForm = styled.form<SendMessageFormStyles>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    width: ${props => props.width ?? '100%'};

    padding: ${props => props.padding ?? '0 70px 0 20px'};
    overflow: hidden;
`
const TextArea = styled.textarea`
    width: 100%;
    height: 80px;

    margin-bottom: 20px;
    padding: 5px 10px;

    font-size: 1em;

    border: none;
    border-radius: 10px;
    background-color: ${theme.colors.accent};
    outline-color: ${theme.colors.primaryBgr};
`

const PostBtn = styled(Button)`
    align-self: flex-end;
    margin-bottom: 20px;
`

const ErrorMassage = styled.span`
    position: absolute;
    bottom: 40px;
    left: 30px;
    color: tomato
`

export const S = {
    SendMessageForm,
    TextArea,
    PostBtn,
    ErrorMassage,
}