import { UserType } from "../../sections/users/UsersContainer"
import { Button } from "../Button"
import { FlexWrapper } from "../FlexWrapper"
import { UserImage } from "../userImage/UserImage"
import { S } from "./UserSearchedCardStyles"
import defaultAvatar from "../../assets/defaultUserAvatarImage.png"

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
                <UserImage image={user.photos.small || defaultAvatar} alt={`user ${user.name} avatar`} />
                {user.followed ?
                    <Button onClick={unfollowUser}>Unfollow</Button>
                    :
                    <Button onClick={followUser}>Follow</Button>
                }
            </FlexWrapper>
            <S.UserDataWrapper>
                <FlexWrapper direction="column" justify="space-between" width="50%">
                    <S.UserData>{user.name}</S.UserData>
                    <S.UserData>{user.status}</S.UserData>
                </FlexWrapper>
                <FlexWrapper direction="column" justify="center" gap="10px" width="50%">
                    <S.UserDataLocation>Here must be a city</S.UserDataLocation>
                    <S.UserDataLocation>Here must be a country</S.UserDataLocation>
                </FlexWrapper>
            </S.UserDataWrapper>
        </S.User>
    )
}