import { initChatList, addChat } from './actions'
import { flem } from '../../support'

export const getChatList = (offset, length) => dispatch => {
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
        dispatch(getMessages(response.data[0].mesId, Date.now(), 10))
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
        // console.log('--- /getMessages response ', response);
        dispatch(addChat(response.data, multiChat))
    })
}
