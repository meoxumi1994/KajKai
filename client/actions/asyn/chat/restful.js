import { initChatList, addChat, setCurrentChat, updateUserInfo, changeDisplay } from './actions'
import { flem } from '../../support'

export const getMesId = (id, person, store) => dispatch => {
    flem('/mesid', {
        id: id,
        person: person
    }, {}
    ).then((response) => {
          console.log('\n[API] /getMesId ', response);
          if (store) {
              // dispatch({type: 'NEW_CHAT', data: {mesId: response.mesId}})
              dispatch(getStore(person, response.mesId))
          } else {
              dispatch({type: 'NEW_CHAT', data: {mesId: response.mesId}})
              dispatch(getUser(person, response.mesId))
              dispatch(getMessages(response.mesId, Date.now(), 'init'))
          }
    })
}

export const getStore = (id, mesId) => dispatch => {
    flem('/store/'+id)
    .then((response) => {
          console.log('\n[API] /getStore', response);
          const {id, storename, avatarUrl} = response.store
          dispatch({type: 'CHAT_STORE', data: { mesId: mesId, id: id, username: storename, avatarUrl: avatarUrl}})
          dispatch(getMessages(mesId, Date.now(), 'init'))
    })
}

export const getMessages = (mesId, offset, type) => dispatch => {
    flem('/messages/'+mesId, {
        offset: offset,
        length: 5
    }).then((response) => {
          console.log('\n[API] /getMessages ', response);
          if (type == 'init') {
              dispatch(addChat(response))
              dispatch(setCurrentChat(response.mesId))
          } else {
              dispatch({type: 'UPDATE_MESSAGE', data: { mesId: response.mesId, messages: response.messages}})
          }
    })
}

export const getChatList = (offset) => dispatch => {
    flem('/chatlist', {
        offset: offset,
        length: 10
    }, {}
    )
    .then((response) => {
          console.log('\n[API] /getChatList ', response);
          if (response != undefined && response.data != undefined && response.data.length > 0) {
              const { data, lazyLoad } = response
              dispatch(initChatList(data, lazyLoad))
              if (response.data.length < 5) {
                  dispatch({type: 'DISPLAY_CHAT_LAZYLOAD'})
              }
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
