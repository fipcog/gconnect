import { combineReducers, createStore } from "redux"
import { Messages, UserContacts, dialogsReducer } from "../reducers/dialogsReducer"
import { UserPosts, profileReducer } from "../reducers/profileReducer"
import { usersReducer } from "../reducers/usersReducer"


const appRootReduser = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    findUsers: usersReducer
})

export const store = createStore(appRootReduser)

export type AppRootStoreType = ReturnType<typeof appRootReduser>






