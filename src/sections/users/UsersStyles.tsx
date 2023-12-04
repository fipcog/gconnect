import styled from "styled-components"
import { theme } from "../../style/Theme"
import { Button } from "../../components/Button"



const UsersPage = styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-left: 50px;
    margin-top: 50px;

    color: ${theme.colors.altColor};
`

const UsersList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;

    width: 100%;

    margin-bottom: 60px;
`

const User = styled.li`
    display: flex;
    align-items: center;
    gap: 30px;

    width: 800px;
`

const UserDataWrapper = styled.div`
    display: flex;
    width: 500px;
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

const MoreButton = styled(Button)`
    margin-left: 250px;

    width: 250px;
    height: 80px;

    font-size: 1.5em;
`

export const S = {
    UsersPage,
    UserDataWrapper,
    UsersList,
    User,
    UserData,
    UserDataLocation,
    MoreButton,
}