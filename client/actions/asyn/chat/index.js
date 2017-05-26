import { flet, flem } from '~/actions/support'
import { getTarget } from '../user'

export const getChatList = (id, offset, length) => dispatch => {
    flet('/getchatlist',{
        offset: 0,
        length: 10
    },{

    })
    .then((response) => {
        // console.log('getchatlist response ',response.chatList);
        dispatch({ type: 'LOAD_CHAT_LIST', chatList: response.chatList})
    })
}

export const updateChatList = (response) => dispatch => {
    dispatch({ type: 'LOAD_CHAT_LIST', response})
}

export const getMessage = (chat) => dispatch => {
    flet('/getmessage',{
        id: chat.id,
        offset: 0,
        length: 10
    },{

    })
    .then((response) => {
        // console.log('getmessage response ', chat);
        dispatch({type: 'LOAD_CHAT', messages: response.messages, chat});
    })
}

export const getChatId = (id) => dispatch => {
    flet('/getchatid',{
        person: id
    },{

    })
    .then((response) => {
      console.log('getchatid response ',response);
    })
}


export const addMessage = (id, person, message) => dispatch => {
    flet('/addMessage',{
        mesId: id,
        person: person,
        message: message,
        time: Date.now()
    },{

    })
    .then((response) => {

    })
}
