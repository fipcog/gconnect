import { v1 } from "uuid"

export type UserPost = { id: string, post: string }
export type UserPosts = UserPost[]
export type ProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
} | null
export type InitialStateProfile = {
    userPosts: UserPosts
    profile: ProfileType
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
    profile: null
}
export const profileReducer = (state = initialState, action: masterActionType): InitialStateProfile => {
    switch (action.type) {
        case 'ADD_USER_POST':
            return { ...state, userPosts: [action.payload.newPost, ...state.userPosts] }
        case 'SET_PROFILE':
            return {...state, profile: action.payload.profile}
        default:
            return state
    }
}

type masterActionType = addUserPost | SetProfile

type addUserPost = ReturnType<typeof addUserPostAC>
export const addUserPostAC = (post: string) => {
    const newPost = { id: v1(), post }
    return {
        type: 'ADD_USER_POST',
        payload: {
            newPost
        }
    } as const
}

type SetProfile = ReturnType<typeof setProfile>
export const setProfile = (profile: ProfileType) => {
    return {
        type: 'SET_PROFILE',
        payload: {
            profile
        }
    } as const
}