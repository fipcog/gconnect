import { InitialStateUsers, followUserAC, setUsersAC, unfollowUserAC, usersReducer } from "./usersReducer"

let initial: InitialStateUsers

beforeEach(()=> {
    initial = {
        users: [
            {id:'1', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', followed: false, status: 'I am looking for a job...', fullName: 'Alex Nekrasov', location: {city: 'Minsk', country: 'Belarus'}},
            {id:'2', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', followed: true, status: 'I am looking for a job...', fullName: 'Sergey Volga', location: {city: 'Minsk', country: 'Belarus'}},
            {id:'3', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', followed: false, status: 'I am looking for a job...', fullName: 'Dima Shubin', location: {city: 'Minsk', country: 'Belarus'}},
            {id:'4', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', followed: true, status: 'I am looking for a job...', fullName: 'Petya Sregeev', location: {city: 'Minsk', country: 'Belarus'}},
        ]
    }
})

test('change follow to true', ()=>{
    let result = usersReducer(initial, followUserAC('1'))

    expect(result.users[0].followed).toBe(true)
})
test('change follow to false', ()=>{
    let result = usersReducer(initial, unfollowUserAC('2'))

    expect(result.users[1].followed).toBe(false)
})
test('adding new users', ()=>{
    const newUsers = [
        {id:'1', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', followed: false, status: 'I am looking for a job...', fullName: 'Alex Nekrasov', location: {city: 'Minsk', country: 'Belarus'}},
        {id:'2', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', followed: true, status: 'I am looking for a job...', fullName: 'Sergey Volga', location: {city: 'Minsk', country: 'Belarus'}},
        {id:'3', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', followed: false, status: 'I am looking for a job...', fullName: 'Dima Shubin', location: {city: 'Minsk', country: 'Belarus'}},
        {id:'4', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', followed: true, status: 'I am looking for a job...', fullName: 'Petya Sregeev', location: {city: 'Minsk', country: 'Belarus'}},
    ]
    let result = usersReducer(initial, setUsersAC(newUsers))

    expect(result.users.length).toBe(8)
})