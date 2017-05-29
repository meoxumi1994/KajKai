import { flet, flem } from '~/actions/support'
import { loadChatList, loadChat } from './actions'

// Get list of recented chats
export const getChatList = (offset, length) => dispatch => {
    flet('/getchatlist',{
        offset: 0,
        length: 10
    },{
      chatList: [
        {
          id: "",
          avatarUrl: "",
          name: ""
        }
      ]
    })
    .then((response) => {
        dispatch(loadChatList(response.chatList))
    })
}

// [socket.io] Join chat
export const joinChat = (chat) => dispatch => {
    dispatch(
      {
        type:"server/JOIN_CHAT",
        data: {
          person: chat.id
        }
      }
    )
}

// [socket.io] Send message
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

// Get message
export const getMessage = (chat) => dispatch => {
    flet('/getmessage',{
        id: chat.id,
        offset: chat.offset,
        length: 10
    },{
        messages: []
    })
    .then((response) => {
        dispatch({type: 'LOAD_MORE_MESSAGE', messages: response.messages})
    })
}






export const getTarget = (chat) => dispatch => {
    flet('/gettarget',{
        id: chat.id
    },{
      user: {
        username: "",
        listUrls: [],
        storeList: null,
        avatarUrl: "",
        id: ""
      }
    })
    .then((response) => {
        // console.log('response /gettarget', response);
        dispatch(joinChat(response.user))
    })
}



export const getChatId = (chat, lazyLoad) => dispatch => {
    flet('/getchatid',{
        person: chat.id
    },{
        id: ""
    })
    .then((response) => {
        const castChatObj = {
          id: chat.id,
          username:
          chat.name == undefined? chat.username: chat.name,
          avatarUrl: chat.avatarUrl,
          mesId: response.id
        }
        dispatch(getMessage(castChatObj, lazyLoad));
    })
}
