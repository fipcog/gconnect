import { appAPI, profileAPI, usersAPI } from "../API/API"
import { ThunkCreatorType } from "../redux/store"
import { UsersType } from "../sections/users/UsersContainer"


export type InitialStateUsers = {
    users: UsersType
    maxAmountOnPage: number
    totalAmountOfUsers: number
    currentPage: number
    isLoading: boolean
    loadingInProgressUsers: string[]
}
const initialState: InitialStateUsers = {
    users: [],
    maxAmountOnPage: 5,
    totalAmountOfUsers: 0,
    currentPage: 1,
    isLoading: false,
    loadingInProgressUsers: []
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
        case 'SET_IS_LOADING':
            return {...state, isLoading: action.payload.isLoading}
        case 'ADD_LOADING_IN_PROGRESS': 
            return {...state, loadingInProgressUsers: [...state.loadingInProgressUsers, action.payload.userId]}
        case 'REMOVE_LOADING_IN_PROGRESS':
            return {...state, loadingInProgressUsers: state.loadingInProgressUsers.filter(id => id !== action.payload.userId)}
        default:
            return state
    }
}

type MainActionType = FollowUser 
                                | UnfollowUser 
                                | setUsers 
                                | SetCurrentPage 
                                | SetTotalAmountOfUsers 
                                | SetIsLoading
                                | AddLoadingInProgress
                                | RemoveLoadingInProgress

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

type SetIsLoading = ReturnType<typeof setIsLoadingAC>
export const setIsLoadingAC = (isLoading: boolean) => {
    return {
        type: `SET_IS_LOADING`,
        payload: {
            isLoading
        }
    }   as const
}

type AddLoadingInProgress = ReturnType<typeof addLoadingInProgressAC>
export const addLoadingInProgressAC = (userId: string) => {
    return {
        type: 'ADD_LOADING_IN_PROGRESS',
        payload: {userId}
    }   as const
}
type RemoveLoadingInProgress = ReturnType<typeof removeLoadingInProgressAC>
export const removeLoadingInProgressAC = (userId: string) => {
    return {
        type: 'REMOVE_LOADING_IN_PROGRESS',
        payload: {userId}
    }   as const
}


export const getUsers = (pageNum: number = 1, pageSize: number = 10): ThunkCreatorType => {
    return (dispatch) => {
        dispatch(setIsLoadingAC(true))
        usersAPI.getUsers(pageNum, pageSize)
        .then((res) => {
            dispatch(setUsersAC(res.data.items))
            dispatch(setTotalAmountOfUsersAC(res.data.totalCount))
            dispatch(setCurrentPageAC(pageNum))
        }).finally(()=> dispatch(setIsLoadingAC(false)))
    }
}

export const followUser = (userId: string): ThunkCreatorType => {
    return (dispatch) => {
        dispatch(addLoadingInProgressAC(userId))
        usersAPI.followUser(userId)
            .then(res => dispatch(followUserAC(userId)))
            .finally(()=> dispatch(removeLoadingInProgressAC(userId)))
    }
}

export const unfollowUser = (userId: string): ThunkCreatorType => {
    return (dispatch) => {
        dispatch(addLoadingInProgressAC(userId))
        usersAPI.unfollowUser(userId)
            .then(res => dispatch(unfollowUserAC(userId)))
            .finally(()=> dispatch(removeLoadingInProgressAC(userId)))
    }
}