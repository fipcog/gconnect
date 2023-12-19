import { AuthDataType } from "../API/API"

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

type SetAuthData = ReturnType<typeof setAuthData>
export const setAuthData = (data: AuthDataType) => {
    return {
        type: 'SET_AUTH_DATA',
        payload: {
            data
        }
    } as const
}