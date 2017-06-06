import { flet, flem } from '~/actions/support'
import { loadChatList, loadChat, waitingChat } from './actions'

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
        if (response != undefined) {
          dispatch(loadChatList(response.chatList))
        } else {
          console.log('CANNOT /getchatlist')
        }
    })
}

export const chatWaiting = () => dispatch => {
  dispatch (
    {
      type: "server/CHAT_WAITING"
    }
  )
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
export const sendMessage = (mesId, user, message) => dispatch => {
    let time = Date.now()
    
    dispatch(waitingChat(user.avatarUrl, user.id, user.username, mesId, message, time))

    dispatch(
      {
        type:"server/ADD_MESSAGE",
        data: {
          mesId,
          message,
          time
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
