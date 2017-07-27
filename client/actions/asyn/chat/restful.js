import { initChatList, addChat, setCurrentChat, updateUserInfo, changeDisplay } from './actions'
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
          dispatch(getMessages(response.mesId, Date.now(), 'init'))
    })
}

export const getMessages = (mesId, offset, type) => dispatch => {
    flem('/messages/'+mesId, {
        offset: offset,
        length: 5
    }).then((response) => {
          console.log('\n[API] /getMessages ', response);
          if (type == 'init') {
              dispatch(addChat(response, true))
              dispatch(setCurrentChat(response.mesId))
          } else {
              dispatch({type: 'UPDATE_MESSAGE', data: { mesId: response.mesId, messages: response.messages}})
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
          if (response != undefined && response.data.length > 0) {
              const { data, lazyLoad } = response
              dispatch(initChatList(data, lazyLoad))
          }
    })
}

export const searchUser = (mesId, keyword) => dispatch => {
    flem('/search/user', {
        offset: 0,
        length: 10,
        keyword
    }, {})
    .then((response) => {
          console.log('\n[API] /searchUser ', keyword, response);
          dispatch({type: 'SEARCH', subType: 'ADD_SUGGESTIONS', data: {mesId: mesId, users: response.users}})
          dispatch(changeDisplay('SEARCH', mesId, true))
    })
}

export const getUser = (person, mesId) => dispatch => {
    flem('/user/'+person, {}, {})
    .then((response) => {
          console.log('\n[API] /user ', response);
          if (response != undefined && response.status == 'success') {
              const { avatarUrl, username, id } = response.user
              dispatch(updateUserInfo(mesId, id, username, avatarUrl))
          } else if (response != undefined && response.status == 'nodata') {
              dispatch(updateUserInfo(-1, 0, '', ''))
          }

    })
}
