import { flet, flem } from '~/actions/support'
import { loadChatList, loadChat, waitingChat } from './actions'

// [socket.io] Send message
export const sendMessage = (mesId, id, text, url, type) => dispatch => {
    dispatch(
      {
        type: "server/ADD_MESSAGE",
        data: {
          mesId,
          id,
          message: {
            text,
            url,
            type
          },
          time: Date.now()
        }
      })
}

// Get message
export const getMessage = (mesId) => dispatch => {
    flet('/getmessage',{
        mesId,
        offset: 0,
        length: 10
    },{
        messages: []
    })
    .then((response) => {
        

        dispatch({type: 'ADD_CHAT', data: response})
    })
}

// Get list of recented chats
// export const getChatList = (offset, length) => dispatch => {
//     flet('/getchatlist',{
//         offset: 0,
//         length: 10
//     },{
//       chatList: [
//         {
//           id: "",
//           avatarUrl: "",
//           name: ""
//         }
//       ]
//     })
//     .then((response) => {
//         if (response != undefined) {
//           dispatch(loadChatList(response.chatList))
//         } else {
//           console.log('CANNOT /getchatlist')
//         }
//     })
// }

// export const chatWaiting = () => dispatch => {
//   dispatch (
//     {
//       type: "server/CHAT_WAITING"
//     }
//   )
// }

// [socket.io] Join chat
// export const joinChat = (chat) => dispatch => {
//     dispatch(
//       {
//         type:"server/JOIN_CHAT",
//         data: {
//           person: chat.id
//         }
//       }
//     )
// }




// export const getTarget = (chat) => dispatch => {
//     flet('/gettarget',{
//         id: chat.id
//     },{
//       user: {
//         username: "",
//         listUrls: [],
//         storeList: null,
//         avatarUrl: "",
//         id: ""
//       }
//     })
//     .then((response) => {
//         // console.log('response /gettarget', response);
//         dispatch(joinChat(response.user))
//     })
// }

export const getChatId = (id) => dispatch => {
    flet('/getchatid',{
        person: id
    },{
        id: ""
    })
    .then((response) => {
      console.log('/getchatid ',response);
    })
}
