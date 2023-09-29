import styled from "styled-components"
import { theme } from "../../style/Theme"

const Profile = styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    border-radius: 10px;
    overflow: hidden;

    color: ${theme.colors.altColor};

    & span {
        margin-bottom: 3px;

        &:last-child {
            margin: 0;
        }
    }
`

const ProfileImage = styled.img`
    display: block;

    width: 100%;
    height: 200px;

    object-fit: cover;
    border-radius: 10px;
`

const UserName = styled.h1`
    margin-bottom: 40px;
`

const UserAddress = styled.address`
    display: flex;
    flex-direction: column;

    font-style: normal;
`

export const S = {
    Profile,
    ProfileImage,
    UserName,
    UserAddress,
}