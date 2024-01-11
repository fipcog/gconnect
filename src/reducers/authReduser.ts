import { Dispatch } from "react"
import { AuthDataType, AuthResponseType, appAPI, profileAPI } from "../API/API"
import { ThunkCreatorType } from "../redux/store"
import { ProfileType } from "./profileReducer"
import { AxiosPromise, AxiosResponse } from "axios"


export type InitialStateAuth = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    profile: ProfileType
}
const initialState: InitialStateAuth = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    profile: null
}

export const authReducer = (state = initialState, action: masterActionType): InitialStateAuth => {
    switch (action.type) {
        case 'SET_AUTH_DATA':
            return {...state, ...action.payload.data, isAuth: true}
        case 'CLEAR_AUTH_DATA':
            return { id: null, email: null, login: null, profile: null, isAuth: false}
        case 'SET_AUTH_USER_PROFILE':
            return {...state, profile: action.payload.profile}
        default:
            return state
    }
}

type masterActionType = SetAuthData | SetAuthUserProfile | ClearAuthData

type SetAuthData = ReturnType<typeof setAuthDataAC>
export const setAuthDataAC = (data: AuthDataType) => {
    return {
        type: 'SET_AUTH_DATA',
        payload: {
            data
        }
    } as const
}

type SetAuthUserProfile = ReturnType<typeof setAuthUserProfileAC>
export const setAuthUserProfileAC = (profile: ProfileType) => {
    return {
        type: 'SET_AUTH_USER_PROFILE',
        payload: {
            profile
        }
    }   as const
}

type ClearAuthData = ReturnType<typeof clearAuthData>
export const clearAuthData = () => {
    return {
        type: "CLEAR_AUTH_DATA"
    } as const
}

export const getAuthData = (): ThunkCreatorType<AxiosPromise<AuthResponseType>> => {
    return (dispatch) => {
        return appAPI.getAuthData().then((res)  => {
            dispatch(setAuthDataAC(res.data.data))

            return res
        })
    }
}

export const getAuthProfile = (id: number): ThunkCreatorType => {
    return (dispatch) => {
        profileAPI.getProfile(String(id)).then((res) => dispatch(setAuthUserProfileAC(res.data)))
    }
}

export const logIn = (email: string, password: string, rememberMe: boolean = false): ThunkCreatorType => (dispatch) => {
    appAPI.login(email, password, rememberMe)
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(getAuthData())
                // dispatch(getAuthProfile(res.data.data.userId))
            }
        })
}

export const logOut = (): ThunkCreatorType => (dispatch) => {
    appAPI.logout()
    .then(res => dispatch(clearAuthData()))
}