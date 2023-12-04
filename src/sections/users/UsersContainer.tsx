import { connect } from "react-redux";
import { Users } from "./Users";
import { followUserAC, setUsersAC, unfollowUserAC } from "../../reducers/usersReducer";
import { AppRootStoreType } from "../../redux/store";

export type UserType = {
    id: string
    avatarURL: string
    followed: boolean
    status: string
    fullName: string
    location: {city: string, country: string}
}
export type UsersType = UserType[]
type mapStateToPropsType = {
    users: UsersType
}
type mapDispatchToPropsType = {
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    setUsers: (users: UsersType) => void
}
type OwnUsersProps = {}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType & OwnUsersProps



const mapStateToProps = (state: AppRootStoreType) => {
    return {
        users: state.findUsers.users
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        followUser: (userId: string) => dispatch(followUserAC(userId)),
        unfollowUser: (userId: string) => dispatch(unfollowUserAC(userId)),
        setUsers: (users: UsersType) => dispatch(setUsersAC(users))
    }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnUsersProps, AppRootStoreType>(mapStateToProps, mapDispatchToProps)(Users)