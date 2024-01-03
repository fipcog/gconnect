import { InitialStateProfile, addUserPostAC, profileReducer, setProfile } from "./profileReducer"


let initial: InitialStateProfile

beforeEach(() => {
    initial = {
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
        profile: null,
        profileStatus: ''
    }
})

test('adding message', () => {
    const result = profileReducer(initial, addUserPostAC('hello!'))

    expect(result.userPosts[0].post).toBe('hello!')
})
test('setting profile', () => {
    const newProfile = {
        "aboutMe": "я круто чувак 1001%",
        "contacts": {
            "facebook": "facebook.com",
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": 2,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    }
    const result = profileReducer(initial, setProfile(newProfile))

    expect(result.profile).toBeTruthy
})