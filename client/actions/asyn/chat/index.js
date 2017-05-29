import { flet, flem } from '~/actions/support'
import { loadChatList, loadChat } from './actions'

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

export const getChatList = (offset, length) => dispatch => {
    flet('/getchatlist',{
        offset: 0,
        length: 10
    },{
      chatList: []
    })
    .then((response) => {
        dispatch(loadChatList(response.chatList))
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

export const joinChat = (chat, lazyLoad) => dispatch => {
    dispatch(
      {
        type:"server/JOIN_CHAT",
        data: {
          person: chat.id
        }
      }
    )
    dispatch(getChatId(chat, lazyLoad));
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

export const getMessage = (chat, lazyLoad) => dispatch => {
    flet('/getmessage',{
        id: chat.id,
        offset: lazyLoad.offset,
        length: lazyLoad.length
    },{
        messages: []
    })
    .then((response) => {
        dispatch(loadChat(response.messages, chat))
        // dispatch(loadChatList())
    })
}

export const loadMoreMessage = (id, lazyLoad) => dispatch => {
    flet('/getmessage',{
        id: id,
        offset: lazyLoad.offset + 20,
        length: lazyLoad.length + 20
    },{
        messages: []
    })
    .then((response) => {
        dispatch({type: 'LOAD_MORE_CHAT', messages: response.messages})
    })
}
