import { UserType } from "../../sections/users/UsersContainer"
import { Button } from "../Button"
import { FlexWrapper } from "../FlexWrapper"
import { UserImage } from "../userImage/UserImage"
import { S } from "./UserSearchedCardStyles"

type UserSearchedCard = {
    unfollowUser: () => void
    followUser: () => void
    user: UserType
}
export const UserSearchedCard: React.FC<UserSearchedCard> = (props) => {
    const {unfollowUser,
            followUser,
            user} = props
    return (
        <S.User>
            <FlexWrapper direction="column" align="center" gap="10px" width="auto">
                <UserImage image={user.avatarURL} alt={`user ${user.fullName} avatar`} />
                {user.followed ?
                    <Button onClick={unfollowUser}>Unfollow</Button>
                    :
                    <Button onClick={followUser}>Follow</Button>
                }
            </FlexWrapper>
            <S.UserDataWrapper>
                <FlexWrapper direction="column" justify="space-between" width="50%">
                    <S.UserData>{user.fullName}</S.UserData>
                    <S.UserData>{user.status}</S.UserData>
                </FlexWrapper>
                <FlexWrapper direction="column" justify="center" gap="10px" width="50%">
                    <S.UserDataLocation>{user.location.city},</S.UserDataLocation>
                    <S.UserDataLocation>{user.location.country}</S.UserDataLocation>
                </FlexWrapper>
            </S.UserDataWrapper>
        </S.User>
    )
}