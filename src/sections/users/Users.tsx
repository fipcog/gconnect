import { Button } from "../../components/Button"
import { FlexWrapper } from "../../components/FlexWrapper"
import { UserImage } from "../../components/userImage/UserImage"
import { UserSearchedCard } from "../../components/user_searched_card/UserSearchedCard"
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
                        <UserSearchedCard key={u.id} 
                                        user={u} 
                                        followUser={()=> followUser(u.id)} 
                                        unfollowUser={()=> unfollowUser(u.id)}/>
                    )
                })}
            </S.UsersList>
            <S.MoreButton onClick={() => setUsers(mocks.users)}>Show more</S.MoreButton>
        </S.UsersPage>
    )
}