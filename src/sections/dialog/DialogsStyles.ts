import styled from "styled-components"
import { theme } from "../../style/Theme"

const Dialogs = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    width: 100%;
    height: 100%;

    border-radius: 10px;
    overflow: hidden;

    color: ${theme.colors.altColor};
`

const ContactsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 30%;
    min-height: 600px;

    padding-top: 40px;
    padding-left: 40px;

    border-right: 2px solid ${theme.colors.accent};
`

const DialogsDesk = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    width: 70%;

    padding: 40px;
    padding-left: 10px;
`

export const S = {
    Dialogs,
    ContactsList,
    DialogsDesk,
} 