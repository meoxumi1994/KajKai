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
    disabled: false,
    display: {
        addMember: false,
        setting: false
    }
}, action, subAction) => {

    switch (action.type || subAction.type) {
      case 'INIT_CHAT_LIST':
          return {
              ...state,
              mesId: action.data.mesId,
              lastMessage: action.data.lastMessage,
              // displayLabel: utils.displayLabel(action.data.users),
              displayLabel: action.data.displayLabel,
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

      case 'NEW_CHAT':
          return {
              ...state,
              lastMessage: undefined,
              mesId: action.data.mesId,
              usersKey: [],
              usersMap: {},
          }

      case 'client/ADD_MEMBER':
          if (subAction.type == 'NEW_GROUP') {
              return {
                  ...state,
                  mesId: action.data.mesId,
                  lastMessage: undefined,
                  displayLabel: utils.groupDisplayLabel(action.data.members, subAction.data.id),
                  usersKey: utils.groupUsersKey(action, action.data.members, subAction.data.id),
                  usersMap: utils.groupUsersMap(action, action.data.members, subAction.data.id),
                  status: false,
              }
          } else {
            return {
                ...state
            }
          }


      case 'client/REMOVE_MEMBER':
          return {
              ...state,
              usersMap: {
                  ...state.usersMap,
                  [action.data.memberId]: {
                      ...state.usersMap[action.data.memberId],
                      disabled: true
                  },
              },
          }

        default:
            return state
    }
}

export default chatMap
