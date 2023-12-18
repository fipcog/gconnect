import { UsersType } from "../sections/users/UsersContainer"


export type InitialStateUsers = {
    users: UsersType
    maxAmountOnPage: number
    totalAmountOfUsers: number
    currentPage: number
    isLoading: boolean
}
const initialState: InitialStateUsers = {
    users: [],
    maxAmountOnPage: 5,
    totalAmountOfUsers: 0,
    currentPage: 1,
    isLoading: false
}

export const usersReducer = (state = initialState, action: MainActionType): InitialStateUsers => {
    switch(action.type) {
        case 'FOLLOW_USER':
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)}
        case 'UNFOLLOW_USER':
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)}
        case 'SET_USERS':
            return {...state, users: [...action.payload.users]}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.payload.pageNumber}
        case 'SET_TOTAL_AMOUNT_OF_USERS':
            return {...state, totalAmountOfUsers: action.payload.amount}
        default:
            return state
    }
}

type MainActionType = FollowUser | UnfollowUser | setUsers | SetCurrentPage | SetTotalAmountOfUsers

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

type SetCurrentPage = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (pageNumber: number) => {
    return {
        type: `SET_CURRENT_PAGE`,
        payload: {
            pageNumber
        }
    }   as const
}

type SetTotalAmountOfUsers = ReturnType<typeof setTotalAmountOfUsersAC>
export const setTotalAmountOfUsersAC = (amount: number) => {
    return {
        type: `SET_TOTAL_AMOUNT_OF_USERS`,
        payload: {
            amount
        }
    }   as const
}

type SetIsLoading = ReturnType<typeof SetTotalAmountOfUsersAC>
export const setIsLoadingAC = (amount: number) => {
    return {
        type: `SET_TOTAL_AMOUNT_OF_USERS`,
        payload: {
            amount
        }
    }   as const
}