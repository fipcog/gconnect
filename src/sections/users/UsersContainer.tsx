import { connect } from "react-redux";
import { Users } from "./Users";
import { followUser, unfollowUser } from "../../reducers/usersReducer";
import { AppRootStoreType } from "../../redux/store";
import React from "react";
import {  UserType } from "../../API/API";
import { getUsers } from './../../reducers/usersReducer';
import { withRedirect } from "../../hoc/withRedirect";


export type UsersType = UserType[]
type mapStateToPropsType = {
    users: UsersType
    pageSize: number
    currentPage: number
    totalAmount: number
    isLoading: boolean
    loadingInProgressUsers: string[]
}
type mapDispatchToPropsType = {
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    getUsers: (pageNum?: number, pageSize?: number) => void
}
type OwnUsersContainerProps = {}
export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType & OwnUsersContainerProps

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount(): void {
        this.props.getUsers()
    }

    changePage = (pageNum: number) => {
        this.props.getUsers(pageNum)
    }

    followUser = (userId: string) => {
        this.props.followUser(userId)
    }

    unfollowUser = (userId: string) => {
        this.props.unfollowUser(userId)
    }

    render(): React.ReactNode {
        return <>
                <Users 
                    users={this.props.users}
                    amountOfUsers={this.props.totalAmount}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    changePage={this.changePage}
                    followUser={this.followUser}
                    unfollowUser={this.unfollowUser}
                    isLoading={this.props.isLoading}
                    loadingInProgressUsers={this.props.loadingInProgressUsers}
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
        loadingInProgressUsers: state.findUsers.loadingInProgressUsers
    }
}

const WithRedirectUsers = withRedirect(UsersContainer)

export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnUsersContainerProps, AppRootStoreType>(mapStateToProps, {
    getUsers, 
    followUser, 
    unfollowUser
})(WithRedirectUsers)