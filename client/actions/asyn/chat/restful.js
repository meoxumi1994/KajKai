import { initChatList, addChat, setCurrentChat, updateUserInfo } from './actions'
import { flem } from '../../support'

export const getMesId = (id, person) => dispatch => {
    flem('/mesid', {
        id: id,
        person: person
    }, {}
    ).then((response) => {
          console.log('\n[API] /getMesId ', response);
          dispatch({type: 'NEW_CHAT', data: {mesId: response.mesId}})
          dispatch(getUser(person, response.mesId))
          dispatch(getMessages(response.mesId, Date.now()))
          dispatch(getMessages(response.mesId, Date.now()))
    })
}

export const getMessages = (mesId, offset, multiChat) => dispatch => {
    flem('/messages/'+mesId, {
        offset: offset,
        length: 20
    }, {}).then((response) => {
            dispatch(addChat(response, multiChat))
            dispatch(setCurrentChat(response.mesId))
    })
}

export const getUser = (person, mesId) => dispatch => {
    flem('/user/'+person, {}, {}).then((response) => {
          console.log('\n[API] /user ', response);
          const { avatarUrl, username, id } = response.user
          dispatch(updateUserInfo(mesId, id, username, avatarUrl))
    })
}

export const getChatList = (offset) => dispatch => {
    flem('/chatlist', {
      offset: offset,
      length: 20
    }, {}
    )
    .then((response) => {
          console.log('\n[API] /getChatList ', response);
          const { data, lazyLoad } = response
          dispatch(initChatList(data, lazyLoad))
          if (data.length > 0) {
              dispatch(getMessages(data[0].mesId, Date.now()))
              dispatch(setCurrentChat(data[0].mesId))
          }
    })
}
