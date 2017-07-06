import { initChatList, addChat, setCurrentChat } from './actions'
import { flem } from '../../support'

export const getUser = (person, mesId) => dispatch => {
    flem('/user/'+person, {}, {}).then((response) => {
        console.log('[API] /user ', response);
        const { avatarUrl, username, id } = response.user
        dispatch({type: 'UPDATE_CHAT', data: {
            mesId,
            username,
            avatarUrl,
            id
        }})
    })
}

export const getUser2 = (person, mesId) => dispatch => {
    flem('/user/'+person, {}, {}).then((response) => {
        console.log('[API] /user2 ', response);
        dispatch({type: 'UPDATE_CHAT', data: {
          mesId,
          username,
          avatarUrl,
          id
        }})
    })
}

export const getMesId = (id, person) => dispatch => {
  console.log('[API] /get mesid ', id, person);
  flem('/mesid', {
    id: id,
    person: person
  }, {}
  ).then((response) => {
        console.log('--- getMesId ', response);
        dispatch({type: 'ADD_CHAT', data: {mesId: response.mesId, label: 'Xin chờ...'}})
        dispatch(setCurrentChat(response.mesId))
        dispatch(getUser(person, response.mesId))
        dispatch(getMessages(response.mesId, Date.now(), 10, true))
  })
}

export const getMessages = (mesId, offset, length, status) => dispatch => {
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
        // console.log('[API] /getMessages ', response);
        // !status: doesn't have mesId yet
        if (!status) {
            dispatch({type: 'ADD_CHAT', data: {mesId: mesId, label: 'Tin nhắn mới'}})
            dispatch(setCurrentChat(mesId))
        } else {
            console.log('/getMessages response ' , response);
            dispatch(addChat(response, false))
            dispatch(setCurrentChat(response.mesId))
        }
    })
}

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
        console.log('[API] /getchatlist response ', response);
        const { data, lazyLoad } = response
        dispatch(initChatList(data, lazyLoad))
        if (data.length > 0) {
            dispatch(getMessages(data[0].mesId, Date.now(), 10, true))
            dispatch(setCurrentChat(data[0].mesId))
        }
    })
}
