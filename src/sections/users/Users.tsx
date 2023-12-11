import { Button } from "../../components/Button"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Pagination } from "../../components/pagination/Pagination"
import { UserImage } from "../../components/userImage/UserImage"
import { UserSearchedCard } from "../../components/user_searched_card/UserSearchedCard"
import { UserType } from "./UsersContainer"
import { S } from "./UsersStyles"


type UsersPropsType = {
    users: UserType[]
    amountOfUsers: number
    currentPage: number
    pageSize: number
    changePage: (pageNum: number) => void
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    const { users, 
            amountOfUsers, 
            currentPage, 
            pageSize, 
            followUser, 
            unfollowUser, 
            changePage } = props

    const amountOfPages = Math.ceil(amountOfUsers / pageSize)

    return (
        <S.UsersPage>
            <Pagination pagesAmount={amountOfPages} changePage={changePage}/>
            <S.UsersList>
                {users.map(u => {
                    return (
                        <UserSearchedCard key={u.id}
                            user={u}
                            followUser={() => followUser(u.id)}
                            unfollowUser={() => unfollowUser(u.id)} />
                    )
                })}
            </S.UsersList>
            {/* <S.MoreButton onClick={() => setUsers(mocks.users)}>Show more</S.MoreButton> */}
        </S.UsersPage>
    )
}