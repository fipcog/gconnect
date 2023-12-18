import { connect } from "react-redux";
import { Users } from "./Users";
import { followUserAC, setCurrentPageAC, setIsLoadingAC, setTotalAmountOfUsersAC, setUsersAC, unfollowUserAC } from "../../reducers/usersReducer";
import { AppRootStoreType } from "../../redux/store";
import React from "react";
import axios from "axios";
import { Preloader } from "../../components/preloader/Preloader";

export type UserType = {
    id: string
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
    status: string
    name: string
    uniqueUrlName?: string
    // location: {city: string, country: string}
}

type ResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

export type UsersType = UserType[]
type mapStateToPropsType = {
    users: UsersType
    pageSize: number
    currentPage: number
    totalAmount: number
    isLoading: boolean
}
type mapDispatchToPropsType = {
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    setUsers: (users: UsersType) => void
    setCurrentPage: (pageNum: number) => void
    setAmountOfUsers: (amount: number) => void
    setIsLoading: (isLoading: boolean) => void
}
type OwnUsersContainerProps = {}
export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType & OwnUsersContainerProps

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount(): void {
        this.props.setIsLoading(true)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`)
        .then((res) => {
            this.props.setUsers(res.data.items)
            this.props.setAmountOfUsers(res.data.totalCount)
        }).finally(()=> this.props.setIsLoading(false))
    }

    changePage = (pageNum: number) => {
        this.props.setIsLoading(true)
        this.props.setCurrentPage(pageNum)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNum}`)
        .then((res) => {
            this.props.setUsers(res.data.items)
            this.props.setAmountOfUsers(res.data.totalCount)
        }).finally(()=> this.props.setIsLoading(false))
    }

    render(): React.ReactNode {
        return <>
                <Users 
                    users={this.props.users}
                    amountOfUsers={this.props.totalAmount}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    changePage={this.changePage}
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                    isLoading={this.props.isLoading}
                    />

            </>
    }
}

const mapStateToProps = (state: AppRootStoreType) => {
    return {
        users: state.findUsers.users,
        pageSize: state.findUsers.maxAmountOnPage,
        currentPage: state.findUsers.currentPage,
        totalAmount: state.findUsers.totalAmountOfUsers,
        isLoading: state.findUsers.isLoading,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        followUser: (userId: string) => dispatch(followUserAC(userId)),
        unfollowUser: (userId: string) => dispatch(unfollowUserAC(userId)),
        setUsers: (users: UsersType) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNum: number) => dispatch(setCurrentPageAC(pageNum)),
        setAmountOfUsers: (amount: number) => dispatch(setTotalAmountOfUsersAC(amount)),
        setIsLoading: (isLoading: boolean) => dispatch(setIsLoadingAC(isLoading))
    }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnUsersContainerProps, AppRootStoreType>(mapStateToProps, mapDispatchToProps)(UsersContainer)