import { v1 } from "uuid"

export type UserPost = { id: string, post: string }
export type UserPosts = UserPost[]
type initialStateType = {
    profile: {
        userPosts: UserPosts
    }
}
const initialState: initialStateType = {
    profile: {
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
}
export const profileReducer = (state = initialState, action: masterActionType) => {
    switch(action.type) {
        case 'ADD_USER_POST':
            return {...state, profile: {...state.profile, userPosts: [{id: action.payload.id, post: action.payload.post}, ...state.profile.userPosts]} }
        default:
            return state
    }
}

type masterActionType = addUserPost

type addUserPost = ReturnType<typeof addUserPostAC>
export const addUserPostAC = (post: string) => {
    return {
        type: 'ADD_USER_POST',
        payload: {
            id: v1(),
            post
        }
    } as const 
}