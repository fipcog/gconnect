import { AuthDataType, appAPI } from "../API/API"
import { ThunkCreatorType } from "../redux/store"
import { ProfileType } from "./profileReducer"

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
        case 'SET_AUTH_USER_PROFILE':
            return {...state, profile: action.payload.profile}
        default:
            return state
    }
}

type masterActionType = SetAuthData | SetAuthUserProfile

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

export const getAuthData = (): ThunkCreatorType => {
    return (dispatch) => {
        appAPI.getAuthData().then((res) => {
            dispatch(setAuthDataAC(res.data.data))
        })
    }
}

export const getAuthProfile = (id: number): ThunkCreatorType => {
    return (dispatch) => {
        appAPI.getProfile(String(id)).then((res) => dispatch(setAuthUserProfileAC(res.data)))
    }
}