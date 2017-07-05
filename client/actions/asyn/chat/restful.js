import { initChatList, addChat } from './actions'
import { flem } from '../../support'

export const getUser = (person, mesId) => dispatch => {
    flem('/user/'+person, {}, {}).then((response) => {
        dispatch({type: 'UPDATE_CHAT', data: {
            mesId: mesId,
            displayLabel: response.user.username
        }})
    })
}

export const getMesId = (id, person) => dispatch => {
  console.log('get mesid ', id, person);
  flem('/mesid', {
    id: id,
    person: person
  }, {}
  ).then((response) => {
        console.log('--- getMesId ', response);
        dispatch({type: 'ADD_CHAT', data: {mesId: response.mesId, label: 'Đang chờ...'}})
        dispatch({type: 'SET_CURRENT_CHAT', data: {mesId: response.mesId}})
        dispatch(getMessages(response.mesId, Date.now(), 10, false, true))
        // dispatch(getUser(person, response.mesId))
  })
}

export const getMessages = (mesId, offset, length, multiChat, status) => dispatch => {
    // console.log('--- /getMessages ', mesId);
    flem('/messages/'+mesId, {
      offset: offset,
      length: 7
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
        if (!status) {
            dispatch({type: 'ADD_CHAT', data: {mesId: mesId, label: 'Tin nhắn mới'}})
            dispatch({type: 'SET_CURRENT_CHAT', data: {mesId: mesId}})
        } else {
            console.log('/getMessages response ' , response);
            dispatch(addChat(response, multiChat))
            dispatch({type: 'SET_CURRENT_CHAT', data: {mesId: response.mesId}})
        }
    })
}

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
        console.log('----------- /getchatlist response ', response);
        dispatch(initChatList(response.data, response.lazyLoad))
        // if (!multiChat) {
        //   dispatch(getMessages(response.data[0].mesId, Date.now(), 10, false))
        //   dispatch({type: 'SET_CURRENT_CHAT', data: {mesId: response.data[0].mesId, isNewMessage: false}})
        // }
    })
}
