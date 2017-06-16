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
        if (mesId === "593bc3ff0607380b9934204e") {
          response = {
            mesId: "593bc3ff0607380b9934204e",
            messages: [
              {
                id: "59302a009afeed1a7f37cac0",
                message: {
                  text: "hey boy",
                  type: "msg",
                  url: ""
                },
                time: 1497089078194
              },
              {
                id: "593ea5bf0d346a0b68a88a74",
                message: {
                  text: "hi there",
                  type: "msg",
                  url: ""
                },
                time: 1497089078194
              }
            ]
          }
        } else if (mesId === '593e4c1a2688d830be26fc66') {
          response = {
            mesId: "593e4c1a2688d830be26fc66",
            messages: [
              {
                id: "593234a11c75513e381e5c87",
                message: {
                  text: "fuck u",
                  type: "msg",
                  url: ""
                },
                time: 1497089078194
              },
              {
                id: "593234a11c75513e381e5c87",
                message: {
                  text: "answer me",
                  type: "msg",
                  url: ""
                },
                time: 1497089078194
              },
              {
                id: "593ea5bf0d346a0b68a88a74",
                message: {
                  text: "hi there",
                  type: "msg",
                  url: ""
                },
                time: 1497089078194
              }
            ]
          }
        } else {
          response = {
            mesId: "593e4c1a2688d830be26fc00",
            messages: [
              {
                id: "593234a11c75513e381e5c87",
                message: {
                  text: "hello man",
                  type: "msg",
                  url: ""
                },
                time: 1497089078194
              },
              {
                id: "59302a009afeed1a7f37cac0",
                message: {
                  text: "answer me",
                  type: "msg",
                  url: ""
                },
                time: 1497089078194
              },
              {
                id: "593ea5bf0d346a0b68a88a74",
                message: {
                  text: "hi there",
                  type: "msg",
                  url: ""
                },
                time: 1497089078194
              },
              {
                id: "59302a009afeed1a7f37cac0",
                message: {
                  text: "ahihi",
                  type: "msg",
                  url: ""
                },
                time: 1497089078194
              }
            ]
          }
        }

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
