import { initChatList, addChat, setCurrentChat } from './actions'
import { flem } from '../../support'

export const getUser = (person, mesId) => dispatch => {
    flem('/user/'+person, {}, {}).then((response) => {
        console.log('\n[API] /user ', response);
        const { avatarUrl, username, id } = response.user
        dispatch({type: 'UPDATE_CHAT_USER', data: {
            mesId,
            username,
            avatarUrl,
            id
        }})
    })
}

export const getMesId = (id, person) => dispatch => {
  flem('/mesid', {
    id: id,
    person: person
  }, {}
  ).then((response) => {
        console.log('\n[API] /getMesId ', response);
        dispatch({type: 'ADD_CHAT', data: {mesId: response.mesId, label: 'Xin chờ...'}})
        dispatch(setCurrentChat(response.mesId))
        dispatch(getUser(person, response.mesId))
        dispatch(getMessages(response.mesId, Date.now(), 10, true))
  })
}

export const getMessages = (mesId, offset, length, status, multiChat) => dispatch => {
    flem('/messages/'+mesId, {
      offset: offset,
      length: 20
    }, {}).then((response) => {
        console.log('\n[API] /getMessages ', response);
        if (multiChat) {
            dispatch(addChat(response, multiChat))
            dispatch(setCurrentChat(response.mesId))
        } else {
            if (!status) {
                dispatch({type: 'ADD_CHAT', data: {mesId: mesId, label: 'Tin nhắn mới'}})
                dispatch(setCurrentChat(mesId))
            } else {
                dispatch(addChat(response, multiChat))
                dispatch(setCurrentChat(response.mesId))
            }
        }
    })
}

export const getChatList = (offset, length) => dispatch => {
    flem('/chatlist', {
      offset: offset,
      length: length
    }, {}
    )
    .then((response) => {
        console.log('\n[API] /getChatList ', response);
        const { data, lazyLoad } = response
        dispatch(initChatList(data, lazyLoad))
        if (data.length > 0) {
            dispatch(getMessages(data[0].mesId, Date.now(), 10, true))
            dispatch(setCurrentChat(data[0].mesId))
        }
    })
}
