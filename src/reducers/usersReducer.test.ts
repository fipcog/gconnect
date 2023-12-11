import { InitialStateUsers, followUserAC, setUsersAC, unfollowUserAC, usersReducer } from "./usersReducer"

let initial: InitialStateUsers

beforeEach(()=> {
    initial = {
        users: [
            {id:'1', photos: {small:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', large: null}, followed: false, status: 'I am looking for a job...', name: 'Alex Nekrasov'},
            {id:'2', photos: {small:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', large: null}, followed: true, status: 'I am looking for a job...', name: 'Sergey Volga'},
            {id:'3', photos: {small:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', large: null}, followed: false, status: 'I am looking for a job...', name: 'Dima Shubin'},
            {id:'4', photos: {small:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', large: null}, followed: true, status: 'I am looking for a job...', name: 'Petya Sregeev'},
        ],
        maxAmountOnPage: 5,
        totalAmountOfUsers: 0,
        currentPage: 1,
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
        {id:'1', photos: {small:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', large: null}, followed: false, status: 'I am looking for a job...', name: 'Alex Nekrasov'},
        {id:'2', photos: {small:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', large: null}, followed: true, status: 'I am looking for a job...', name: 'Sergey Volga'},
        {id:'3', photos: {small:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', large: null}, followed: false, status: 'I am looking for a job...', name: 'Dima Shubin'},
        {id:'4', photos: {small:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', large: null}, followed: true, status: 'I am looking for a job...', name: 'Petya Sregeev'},
    ]
    let result = usersReducer(initial, setUsersAC(newUsers))

    expect(result.users.length).toBe(8)
})