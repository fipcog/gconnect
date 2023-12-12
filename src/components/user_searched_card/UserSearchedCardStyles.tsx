import styled from "styled-components"
import { theme } from "../../style/Theme"
import { Button } from "../Button"

const User = styled.li`
    display: flex;
    align-items: center;
    gap: 30px;

    width: 800px;
`

const UserDataWrapper = styled.div`
    display: flex;
    width: 900px;
    height: 90px;

    padding: 10px 15px;

    border: 1px solid ${theme.colors.primaryBgr};
    border-radius: 10px;
`

const UserData = styled.span`
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
const UserDataLocation = styled(UserData)`
    text-align: end;
`

export const S = {
    UserDataWrapper,
    User,
    UserData,
    UserDataLocation,
}