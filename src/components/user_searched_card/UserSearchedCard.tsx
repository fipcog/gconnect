import { Button } from "../Button"
import { FlexWrapper } from "../FlexWrapper"
import { UserImage } from "../user_Image/UserImage"
import { S } from "./UserSearchedCardStyles"
import defaultAvatar from "../../assets/defaultUserAvatarImage.png"
import { NavLink } from "react-router-dom"
import { UserType } from "../../API/API"

type UserSearchedCard = {
    unfollowUser: () => void
    followUser: () => void
    user: UserType
    loadingInProgressUsers: string[]
}
export const UserSearchedCard: React.FC<UserSearchedCard> = (props) => {
    const {unfollowUser,
            followUser,
            loadingInProgressUsers,
            user} = props
    return (
        <S.User>
            <FlexWrapper direction="column" align="center" gap="10px" width="auto">
                <NavLink to={'/profile/'+ user.id}><UserImage image={user.photos.small || defaultAvatar} alt={`user ${user.name} avatar`} /></NavLink>
                {user.followed ?
                    <Button onClick={unfollowUser} disabled={loadingInProgressUsers.some(id => id === user.id)}>Unfollow</Button>
                    :
                    <Button onClick={followUser} disabled={loadingInProgressUsers.some(id => id === user.id)}>Follow</Button>
                }
            </FlexWrapper>
            <S.UserDataWrapper>
                <FlexWrapper direction="column" justify="space-between" width="50%">
                    <S.UserData>{user.name}</S.UserData>
                    <S.UserData>{user.status}</S.UserData>
                </FlexWrapper>
                <FlexWrapper direction="column" justify="center" gap="10px" width="50%">
                    <S.UserDataLocation>City is not specified</S.UserDataLocation>
                    <S.UserDataLocation>Country is not specified</S.UserDataLocation>
                </FlexWrapper>
            </S.UserDataWrapper>
        </S.User>
    )
}