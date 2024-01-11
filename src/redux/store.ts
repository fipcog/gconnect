import { AnyAction, applyMiddleware, combineReducers, createStore } from "redux"
import { Messages, UserContacts, dialogsReducer } from "../reducers/dialogsReducer"
import { UserPosts, profileReducer } from "../reducers/profileReducer"
import { usersReducer } from "../reducers/usersReducer"
import { authReducer } from "../reducers/authReduser"
import thunk, { ThunkAction } from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import { appReducer } from "../reducers/appReducer"


const appRootReduser = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    findUsers: usersReducer,
    authData: authReducer,
    app: appReducer
})

export const store = createStore(appRootReduser, applyMiddleware(thunk))

export type AppRootStoreType = ReturnType<typeof appRootReduser>


// @ts-ignore
window.store = store;

export type ThunkCreatorType<ReturnType = void> = ThunkAction<ReturnType, AppRootStoreType, unknown, AnyAction>



