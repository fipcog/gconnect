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


const MoreButton = styled(Button)`
    margin-left: 250px;

    width: 250px;
    height: 80px;

    font-size: 1.5em;
`

export const S = {
    UsersPage,
    UsersList,
    MoreButton,
}