import { AuthDataType } from "../API/API"
import { ThunkCreatorType } from "../redux/store"
import { getAuthData, getAuthProfile } from "./authReduser"

type AppState = {
    isInitialized: boolean
}

const initialState: AppState = {
    isInitialized: false
}
export const appReducer = (state = initialState, action: MainAction) => {
    switch(action.type) {
        case 'SET_IS_INITIALIZED':
            return {...state, isInitialized: action.payload.isInitialized}
        default:
            return state
    }
}

type MainAction = SetIsInitialized

type SetIsInitialized = ReturnType<typeof setIsInitialized>
export const setIsInitialized = (isInitialized: boolean) => {
    return {
        type: 'SET_IS_INITIALIZED',
        payload: {
            isInitialized
        }
    } as const
}

export const initializeApp = (): ThunkCreatorType => (dispatch) => {
    const res = dispatch(getAuthData())
    res
        .then(resData => {
            dispatch(setIsInitialized(true))
            dispatch(getAuthProfile(resData.data.data.id))
        })
}