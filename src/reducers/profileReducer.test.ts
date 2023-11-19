import { InitialStateProfile, addUserPostAC, profileReducer } from "./profileReducer"


let initial: InitialStateProfile

beforeEach(()=> {
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
    }
})

test('adding message', () => {
    const result = profileReducer(initial, addUserPostAC('hello!'))

    expect(result.userPosts[0].post).toBe('hello!')
})