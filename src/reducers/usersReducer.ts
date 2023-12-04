import { UsersType } from "../sections/users/UsersContainer"


type InitialStateUsers = {
    users: UsersType
}
const initialState: InitialStateUsers = {
    users: [
        {id:'1', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', followed: false, status: 'I am looking for a job...', fullName: 'Alex Nekrasov', location: {city: 'Minsk', country: 'Belarus'}},
        {id:'2', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', followed: true, status: 'I am looking for a job...', fullName: 'Sergey Volga', location: {city: 'Minsk', country: 'Belarus'}},
        {id:'3', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', followed: false, status: 'I am looking for a job...', fullName: 'Dima Shubin', location: {city: 'Minsk', country: 'Belarus'}},
        {id:'4', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', followed: true, status: 'I am looking for a job...', fullName: 'Petya Sregeev', location: {city: 'Minsk', country: 'Belarus'}},
    ]
}

export const usersReducer = (state = initialState, action: MainActionType): InitialStateUsers => {
    switch(action.type) {
        case 'FOLLOW_USER':
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)}
        case 'UNFOLLOW_USER':
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)}
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.payload.users]}
        default:
            return state
    }
}

type MainActionType = FollowUser | UnfollowUser | setUsers

type FollowUser = ReturnType<typeof followUserAC>
export const followUserAC = (userId: string) => {
    return {
        type: 'FOLLOW_USER',
        payload: {
            userId
        }
    } as const
}

type UnfollowUser = ReturnType<typeof unfollowUserAC>
export const unfollowUserAC = (userId: string) => {
    return {
        type: 'UNFOLLOW_USER',
        payload: {
            userId
        }
    } as const
}

type setUsers = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UsersType) => {
    return {
        type: 'SET_USERS',
        payload: {
            users
        }
    } as const
}