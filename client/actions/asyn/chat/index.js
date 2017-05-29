import { flet, flem } from '~/actions/support'
import { getTarget } from '../user'
import { loadChatList, loadChat } from './actions'

export const getChatList = (id, offset, length) => dispatch => {
    flet('/getchatlist',{
        offset: 0,
        length: 10
    },{

    })
    .then((response) => {
        dispatch(loadChatList(response.chatList))
    })
}

export const getMessage = (chat) => dispatch => {
    flet('/getmessage',{
        id: chat.id,
        offset: 0,
        length: 50
    },{

    })
    .then((response) => {
      dispatch(loadChat(response.messages, chat));
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
  dispatch(
    {
      type:"server/JOIN_CHAT",
      data: {
        person: chat.id
      }
    }
  )
  dispatch(getChatId(chat));
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
