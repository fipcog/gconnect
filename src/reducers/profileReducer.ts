import { v1 } from "uuid"

export type UserPost = { id: string, post: string }
export type UserPosts = UserPost[]
export type InitialStateProfile = {
    userPosts: UserPosts
}
const initialState: InitialStateProfile = {
    userPosts: [
            {
                id: '1',
                post: 'Why nobody loves me'
            },
            {
                id: '2',
                post: 'Why nobody loves'
            },
            {
                id: '3',
                post: 'Why loves me'
            },
            {
                id: '4',
                post: 'nobody loves me'
            },
    ],
}
export const profileReducer = (state = initialState, action: masterActionType): InitialStateProfile => {
    switch(action.type) {
        case 'ADD_USER_POST':
            return {...state, userPosts: [action.payload.newPost, ...state.userPosts] }
        default:
            return state
    }
}

type masterActionType = addUserPost

type addUserPost = ReturnType<typeof addUserPostAC>
export const addUserPostAC = (post: string) => {
    const newPost = {id: v1(), post}
    return {
        type: 'ADD_USER_POST',
        payload: {
            newPost
        }
    } as const 
}