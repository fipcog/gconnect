import { addMessage, dialogsReducer, InitialStateDialogs } from "./dialogsReducer"

let initial: InitialStateDialogs

beforeEach(()=> {
    initial = {
        messages: [
                {
                    id: '1',
                    messageAuthor: 'Andrew Andrew',
                    message: 'Message Message Message Message Message Message Message Message Message Message Message Message Message'
                },
                {
                    id: '2',
                    messageAuthor: 'Dmitry Dmitry',
                    message: 'Message Message Message Message Message Message Message Message Messessage'
                },
                {
                    id: '3',
                    messageAuthor: 'Sasha Sasha',
                    message: 'Message Message MessaMessage Message Message Message Message Message Message'
                },
                {
                    id: '4',
                    messageAuthor: 'Sveta Sveta',
                    message: 'Message Message Message Message Message Message Mge Message Message Message Message'
                },
                {
                    id: '5',
                    messageAuthor: 'Victor Victor',
                    message: 'Message Message Message Message Message Messagee Message Message Message Message Message'
                },
        ],
        userContacts: [
                {
                    id: '1',
                    name: 'Andrew Andrew'
                },
                {
                    id: '2',
                    name: 'Dmitry Dmitry'
                },
                {
                    id: '3',
                    name: 'Sasha Sasha'
                },
                {
                    id: '4',
                    name: 'Sveta Sveta'
                },
                {
                    id: '5',
                    name: 'Victor Victor'
                },
        ],
    }
})

test('adding message', () => {
    const result = dialogsReducer(initial, addMessage('hello!'))

    expect(result.messages[result.messages.length - 1].message).toBe('hello!')
})