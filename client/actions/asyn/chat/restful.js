import { initChatList, addChat, setCurrentChat } from './actions'
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
        dispatch({type: 'ADD_CHAT', data: {mesId: response.mesId, label: 'Gửi tin nhắn...'}})
        dispatch(setCurrentChat(response.mesId))
        dispatch(getMessages(response.mesId, Date.now(), 10, true))
  })
}

export const getMessages = (mesId, offset, length, status) => dispatch => {
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
        console.log('----------- /getchatlist response ', response);
        const { data, lazyLoad } = response
        dispatch(initChatList(data, lazyLoad))
        dispatch(getMessages(data[0].mesId, Date.now(), 10, true))
        dispatch(setCurrentChat(data[0].mesId))
    })
}
