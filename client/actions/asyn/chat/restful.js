import { initChatList, addChat } from './actions'
import { flem } from '../../support'

export const getChatList = (offset, length, multiChat) => dispatch => {
    flem('/chatlist', {
      offset: offset,
      length: length
    }, {
          lazyLoad: {
            offset: ''
          },
          data: [
            {
              mesId: '',
              lastMessage: {
                id: '',                // Sender id
                time: '',
                message: {
                  text: '',
                  type: '',
                  url: ''
                }
              },
              groupName: '',
              users: [                 // Not included requester
                {
                  avatarUrl: '',
                  id: '',
                  name: '',
                }
              ]
            }
          ]
      }
    )
    .then((response) => {
        // console.log('/getchatlist response ', response);
        dispatch(initChatList(response.data, response.lazyLoad))
        if (!multiChat) {
          dispatch(getMessages(response.data[0].mesId, Date.now(), 10, false))
          dispatch({type: 'SET_CURRENT_CHAT', data: {mesId: response.data[0].mesId, isNewMessage: false}})
        }
    })
}

export const getMessages = (mesId, offset, length, multiChat) => dispatch => {
    flem('/messages/'+mesId, {
      offset: offset,
      length: length
    }, {

        lazyLoad: {
          offset: ''
        },
        mesId: '',
        messages: [
          {
            message: {
              text: '',
              url: '',
              type: ''
            },
            time: ''
          }
        ]

    }).then((response) => {
        dispatch(addChat(response.data, multiChat))
        dispatch({type: 'SET_CURRENT_CHAT', data: {mesId: response.data.mesId, isNewMessage: false}})
    })
}