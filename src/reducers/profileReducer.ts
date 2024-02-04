import { v1 } from "uuid"
import { ResponseProfileType, appAPI, profileAPI } from "../API/API"
import { ThunkCreatorType } from "../redux/store"
import { Dispatch } from "redux";

export type UserPost = { id: string, post: string }
export type UserPosts = UserPost[]
export type ProfileType = ResponseProfileType | null
export type InitialStateProfile = {
    userPosts: UserPosts
    profile: ProfileType
    profileStatus: string
}
const initialState: InitialStateProfile = {
    userPosts: [
        {
            id: '1',
            post: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: '2',
            post: 'Duis aute irure dolor in reprehenderit in voluptate.'
        },
    ],
    profile: null,
    profileStatus: ''
}
export const profileReducer = (state = initialState, action: masterActionType): InitialStateProfile => {
    switch (action.type) {
        case 'ADD_USER_POST':
            return { ...state, userPosts: [action.payload.newPost, ...state.userPosts] }
        case 'SET_PROFILE':
            return { ...state, profile: action.payload.profile }
        case 'SET_PROFILE_STATUS':
            return { ...state, profileStatus: action.payload.status }
        case 'SET_USERS_IMAGE':
            if (state.profile) {
                return { ...state, profile: { ...state.profile, photos: action.payload } }
            } else {
                return state
            }
        default:
            return state
    }
}

type masterActionType = addUserPost | SetProfile | SetProfileStatus | setUserImage

type addUserPost = ReturnType<typeof addUserPost>
export const addUserPost = (post: string) => {
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

type SetProfileStatus = ReturnType<typeof setProfileStatus>
export const setProfileStatus = (status: string) => {
    return {
        type: 'SET_PROFILE_STATUS',
        payload: {
            status
        }
    } as const
}

type setUserImage = ReturnType<typeof setUserImage>
export const setUserImage = (images: { small: string | null, large: string | null }) => {
    return {
        type: 'SET_USERS_IMAGE',
        payload: images
    } as const
}

export const getProfile = (userId: string): ThunkCreatorType => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then((res) => dispatch(setProfile(res.data)))
    }
}

export const getProfileStatus = (userId: string): ThunkCreatorType => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfileStatus(userId)
            .then(res => dispatch(setProfileStatus(res.data)))
    }
}

export const changeProfileStatus = (status: string): ThunkCreatorType => {
    return (dispatch: Dispatch) => {
        profileAPI.setProfileStatus(status)
            .then(res => { dispatch(setProfileStatus(status)) })
    }
}

export const uploadUserImage = (image: File): ThunkCreatorType => (dispatch: Dispatch) => {
    profileAPI.uploadImage(image).then(res => { dispatch(setUserImage(res.data.data.photos)) })
}