import { UserType } from "../../API/API"
import { Button } from "../../components/Button"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Pagination } from "../../components/pagination/Pagination"
import { Preloader } from "../../components/preloader/Preloader"
import { UserImage } from "../../components/userImage/UserImage"
import { UserSearchedCard } from "../../components/user_searched_card/UserSearchedCard"
import { S } from "./UsersStyles"


type UsersPropsType = {
    users: UserType[]
    amountOfUsers: number
    currentPage: number
    pageSize: number
    isLoading: boolean
    loadingInProgressUsers: string[]
    changePage: (pageNum: number) => void
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    const { users, 
            amountOfUsers, 
            currentPage, 
            pageSize, 
            loadingInProgressUsers,
            followUser, 
            unfollowUser, 
            changePage } = props

    const amountOfPages = Math.ceil(amountOfUsers / pageSize)

    return (
        <S.UsersPage>
            {props.isLoading && <Preloader />}
            <Pagination pagesAmount={amountOfPages} currentPage={currentPage} changePage={changePage}/>
            <S.UsersList>
                {users.map(u => {
                    return (
                        <UserSearchedCard key={u.id}
                            user={u}
                            loadingInProgressUsers={loadingInProgressUsers}
                            followUser={() => followUser(u.id)}
                            unfollowUser={() => unfollowUser(u.id)} />
                    )
                })}
            </S.UsersList>
            {/* <S.MoreButton onClick={() => setUsers(mocks.users)}>Show more</S.MoreButton> */}
        </S.UsersPage>
    )
}