import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true
})

export const appAPI = {
    getUsers(pageNum: number = 1, pageSize: number = 10) {
        return instance.get<ResponseUsersType>(`/users?count=${pageSize}&page=${pageNum}`)
    },
    getProfile(userId: string) {
        return instance.get<ResponseProfileType>(`/profile/${userId}`)
    },
    getAuthData() {
        return instance.get<AuthResponseType>('/auth/me')
    },
    followUser(userId: string) {
        return instance.post(`/follow/${userId}`)
    },
    unfollowUser(userId: string) {
        return instance.delete(`/follow/${userId}`)
    }
}

export type ResponseProfileType = {
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
}

export type UserType = {
    id: string
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
    status: string
    name: string
    uniqueUrlName?: string
    // location: {city: string, country: string}
}

export type ResponseUsersType = {
    items: UserType[]
    totalCount: number
    error: string
}

export type AuthDataType= {
    id: number
    email: string 
    login: string 
}

type AuthResponseType = {
    data: AuthDataType
    resultCode: number
    messages: string[]
}