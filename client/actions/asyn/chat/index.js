import { flet, flem } from '~/actions/support'
import { getTarget } from '../user'

export const getChatList = (id, offset, length) => dispatch => {
    flet('/getchatlist',{
        offset: 0,
        length: 10
    },{

    })
    .then((response) => {
        dispatch({ type: 'LOAD_CHAT_LIST', chatList: response.chatList})
    })
}

export const getMessage = (chat) => dispatch => {
    flet('/getmessage',{
        id: chat.id,
        offset: 0,
        length: 10
    },{

    })
    .then((response) => {
      dispatch({type: 'LOAD_CHAT', messages: response.messages, chat });
    })
}

export const sendMessage = (msg) => dispatch => {
    dispatch(
      {
        type:"server/ADD_MESSAGE",
        data: {
          mesId: msg.mesId,
          message: msg.text,
          time: Date.now()
        }
      })
}


export const joinChat = (chat) => dispatch => {
  dispatch(getChatId(chat));
  dispatch(
    {
      type:"server/JOIN_CHAT",
      data: {
        person: chat.id
      }
    }
  )
}

export const getChatId = (chat) => dispatch => {
    flet('/getchatid',{
        person: chat.id
    },{

    })
    .then((response) => {
        dispatch(getMessage({id: chat.id, username: chat.name, avatarUrl: chat.avatarUrl, mesId: response.id}));
    })
}
