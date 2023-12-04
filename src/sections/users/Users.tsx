import { Button } from "../../components/Button"
import { FlexWrapper } from "../../components/FlexWrapper"
import { UserImage } from "../../components/userImage/UserImage"
import { UsersPropsType } from "./UsersContainer"
import { S } from "./UsersStyles"

const mocks = {
    users: [
        {id:'1', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', followed: false, status: 'I am looking for a job...', fullName: 'Alex Nekrasov', location: {city: 'Minsk', country: 'Belarus'}},
        {id:'2', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', followed: true, status: 'I am looking for a job...', fullName: 'Sergey Volga', location: {city: 'Minsk', country: 'Belarus'}},
        {id:'3', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', followed: false, status: 'I am looking for a job...', fullName: 'Dima Shubin', location: {city: 'Minsk', country: 'Belarus'}},
        {id:'4', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', followed: true, status: 'I am looking for a job...', fullName: 'Petya Sregeev', location: {city: 'Minsk', country: 'Belarus'}},
    ]
}

export const Users: React.FC<UsersPropsType> = (props) => {
    const {users, followUser, unfollowUser, setUsers} = props
    return (
        <S.UsersPage>
            <S.UsersList>
                {users.map(u => {
                    return (
                        <S.User key={u.id}>
                            <FlexWrapper direction="column" align="center" gap="10px" width="auto">
                                <UserImage image={u.avatarURL} alt={`user ${u.fullName} avatar`} />
                                {u.followed ? 
                                            <Button onClick={() => unfollowUser(u.id)}>Unfollow</Button>
                                            :
                                            <Button onClick={() => followUser(u.id)}>Follow</Button>
                                }
                            </FlexWrapper>
                            <S.UserDataWrapper>
                                <FlexWrapper direction="column" justify="space-between" width="50%">
                                    <S.UserData>{u.fullName}</S.UserData>
                                    <S.UserData>{u.status}</S.UserData>
                                </FlexWrapper>
                                <FlexWrapper direction="column" justify="center" gap="10px" width="50%">
                                    <S.UserDataLocation>{u.location.city},</S.UserDataLocation>
                                    <S.UserDataLocation>{u.location.country}</S.UserDataLocation>
                                </FlexWrapper>
                            </S.UserDataWrapper>
                        </S.User>
                    )
                })}
            </S.UsersList>
            <S.MoreButton onClick={() => setUsers(mocks.users)}>Show more</S.MoreButton>
        </S.UsersPage>
    )
}