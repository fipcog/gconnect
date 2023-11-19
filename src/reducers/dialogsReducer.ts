import { v1 } from "uuid"

export type Message = { id: string, messageAuthor: string, message: string }
export type Messages = Message[]
export type UserContact = { id: string, name: string }
export type UserContacts = UserContact[]

export type InitialStateDialogs = {
    messages: Messages
    userContacts: UserContacts
}
const initialState: InitialStateDialogs = {
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
export const dialogsReducer = (state = initialState, action: masterActionType): InitialStateDialogs => {
    switch(action.type) {
        case 'ADD_NEW_MESSAGE':
            return {...state, messages: [...state.messages, action.payload.newMessage]}
        default:
            return state
    }
}

type masterActionType = addMessage

type addMessage = ReturnType<typeof addMessageAC>
export const addMessageAC = (message: string) => {
    const newMessage = { id: v1(), messageAuthor: 'UserName', message }
    return {
        type: 'ADD_NEW_MESSAGE',
        payload: {
            newMessage
        }
    } as const
}