import { connect } from "react-redux";
import { Users } from "./Users";
import { SetCurrentPageAC, SetTotalAmountOfUsersAC, followUserAC, setUsersAC, unfollowUserAC } from "../../reducers/usersReducer";
import { AppRootStoreType } from "../../redux/store";
import React from "react";
import axios from "axios";

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
}
type mapDispatchToPropsType = {
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    setUsers: (users: UsersType) => void
    setCurrentPage: (pageNum: number) => void
    setAmountOfUsers: (amount: number) => void
}
type OwnUsersContainerProps = {}
export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType & OwnUsersContainerProps

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount(): void {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`)
        .then((res) => {
            this.props.setUsers(res.data.items)
            this.props.setAmountOfUsers(res.data.totalCount)
        })
    }

    changePage = (pageNum: number) => {
        this.props.setCurrentPage(pageNum)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNum}`)
        .then((res) => {
            this.props.setUsers(res.data.items)
            this.props.setAmountOfUsers(res.data.totalCount)
        })
    }

    render(): React.ReactNode {
        return <Users 
                    users={this.props.users}
                    amountOfUsers={this.props.totalAmount}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    changePage={this.changePage}
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}/>
    }
}

const mapStateToProps = (state: AppRootStoreType) => {
    return {
        users: state.findUsers.users,
        pageSize: state.findUsers.maxAmountOnPage,
        currentPage: state.findUsers.currentPage,
        totalAmount: state.findUsers.totalAmountOfUsers,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        followUser: (userId: string) => dispatch(followUserAC(userId)),
        unfollowUser: (userId: string) => dispatch(unfollowUserAC(userId)),
        setUsers: (users: UsersType) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNum: number) => dispatch(SetCurrentPageAC(pageNum)),
        setAmountOfUsers: (amount: number) => dispatch(SetTotalAmountOfUsersAC(amount))
    }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnUsersContainerProps, AppRootStoreType>(mapStateToProps, mapDispatchToProps)(UsersContainer)