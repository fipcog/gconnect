import { AuthDataType, appAPI } from "../API/API"
import { ThunkCreatorType } from "../redux/store"

export type InitialStateAuth = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
const initialState: InitialStateAuth = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: masterActionType): InitialStateAuth => {
    switch (action.type) {
        case 'SET_AUTH_DATA':
            return {...state, ...action.payload.data, isAuth: true}
        default:
            return state
    }
}

type masterActionType = SetAuthData

type SetAuthData = ReturnType<typeof setAuthDataAC>
export const setAuthDataAC = (data: AuthDataType) => {
    return {
        type: 'SET_AUTH_DATA',
        payload: {
            data
        }
    } as const
}

export const getAuthData = (): ThunkCreatorType => {
    return (dispatch) => {
        appAPI.getAuthData().then((res) => {
            dispatch(setAuthDataAC(res.data.data))
        })
    }
}