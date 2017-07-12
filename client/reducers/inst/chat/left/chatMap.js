import utils from './utils'
import userMap from './userMap'

const chatMap = (state={
    mesId: '',
    lastMessage: {
        text: '',
        type: '',
        time: ''
    },
    displayLabel: '',
    usersKey: [],
    usersMap: {},
    status: true,
    display: {
        addMember: false
    }
}, action) => {
    switch (action.type) {
      case 'INIT_CHAT_LIST':
          return {
              ...state,
              mesId: action.data.mesId,
              lastMessage: action.data.lastMessage,
              displayLabel: utils.displayLabel(action.data.users),
              usersKey: action.data.users.map(user => user.id),
              usersMap: utils.usersMap(action, action.data.users)
          }

      case 'global/RECEIVE_MESSAGE':
          console.log('chatmap ', action);
          return {
              ...state,
              mesId: action.data.mesId,
              displayLabel: action.data.user.username,
              lastMessage: {
                  id: action.data.user.id,
                  time: action.data.time,
                  message: action.data.message
              },
              usersKey: [action.data.user.id],
              usersMap: {
                  [action.data.user.id]: userMap(undefined, action)
              }
          }

      case 'UPDATE_CHAT_USER':
          return {
              ...state,
              mesId: action.data.mesId,
              displayLabel: action.data.username,
              usersKey: [
                  ...state.usersKey,
                  action.data.id
              ],
              usersMap: {
                ...state.usersMap,
                [action.data.id]: {
                    ...state.usersMap[action.data.id],
                    id: action.data.id,
                    avatarUrl: action.data.avatarUrl,
                    username: action.data.username
                }
              },
          }


      default:
          return state
    }
}

export default chatMap
