import { combineReducers, createStore } from "redux"
import { Messages, UserContacts, dialogsReducer } from "../reducers/dialogsReducer"
import { UserPosts, profileReducer } from "../reducers/profileReducer"


const appRootReduser = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer
})

export const store = createStore(appRootReduser)

export type AppRootStoreType = ReturnType<typeof appRootReduser>


// export type State = {
//     profile: {
//         userPosts: UserPosts
//     }
//     dialogs: {
//         messages: Messages
//         userContacts: UserContacts
//     }
//     sidebar:{}
// }

// export const state: State = {
//     profile: {
//         userPosts: [
//             {
//                 id: '1',
//                 post: 'Why nobody loves me'
//             },
//             {
//                 id: '2',
//                 post: 'Why nobody loves'
//             },
//             {
//                 id: '3',
//                 post: 'Why loves me'
//             },
//             {
//                 id: '4',
//                 post: 'nobody loves me'
//             },
//         ],
//     },
//     dialogs: {
//         messages: [
//             {
//                 id: '1',
//                 messageAuthor: 'Andrew Andrew',
//                 message: 'Message Message Message Message Message Message Message Message Message Message Message Message Message'
//             },
//             {
//                 id: '2',
//                 messageAuthor: 'Dmitry Dmitry',
//                 message: 'Message Message Message Message Message Message Message Message Messessage'
//             },
//             {
//                 id: '3',
//                 messageAuthor: 'Sasha Sasha',
//                 message: 'Message Message MessaMessage Message Message Message Message Message Message'
//             },
//             {
//                 id: '4',
//                 messageAuthor: 'Sveta Sveta',
//                 message: 'Message Message Message Message Message Message Mge Message Message Message Message'
//             },
//             {
//                 id: '5',
//                 messageAuthor: 'Victor Victor',
//                 message: 'Message Message Message Message Message Messagee Message Message Message Message Message'
//             },
//         ],
//         userContacts: [
//             {
//                 id: '1',
//                 name: 'Andrew Andrew'
//             },
//             {
//                 id: '2',
//                 name: 'Dmitry Dmitry'
//             },
//             {
//                 id: '3',
//                 name: 'Sasha Sasha'
//             },
//             {
//                 id: '4',
//                 name: 'Sveta Sveta'
//             },
//             {
//                 id: '5',
//                 name: 'Victor Victor'
//             },
//         ],
//     },
//     sidebar: {}
// }








