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
          dispatch(getMessages(response.mesId, Date.now(), 'load'))
    })
}

export const getMessages = (mesId, offset, type) => dispatch => {
    flem('/messages/'+mesId, {
        offset: offset,
        length: 20
    }).then((response) => {

          console.log('\n[API] /getMessages ', type, response);
          switch (type) {
              case 'init':
              case 'load':
                  dispatch(addChat(response, true))
                  dispatch(setCurrentChat(response.mesId))
                  break
              case 'update':
                  dispatch({type: 'UPDATE_MESSAGE', data: {mesId: response.mesId, messages: response.messages}})
                  break
              default:
                  break

          }
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
          // if (data.length > 0) {
          //     dispatch(getMessages(data[0].mesId, Date.now(), 'init'))
          //     dispatch(setCurrentChat(data[0].mesId))
          // }
    })
}

export const searchUser = (mesId, keyword) => dispatch => {
    flem('/search/user', {
        offset: 0,
        length: 10,
        keyword
    }, {})
    .then((response) => {
          console.log('\n[API] /searchUser ', response);
          dispatch({type: 'SEARCH', subType: 'ADD_SUGGESTIONS', data: {mesId: mesId, users: response.users}})
    })
}

export const getUser = (person, mesId) => dispatch => {
    flem('/user/'+person, {}, {})
    .then((response) => {
          console.log('\n[API] /user ', response);
          const { avatarUrl, username, id } = response.user
          dispatch(updateUserInfo(mesId, id, username, avatarUrl))
    })
}
