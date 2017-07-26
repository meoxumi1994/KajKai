import { combineReducers } from 'redux'

const center = (state = {
    // singleKey: [],
    multipleKey: [],
    messagesMap: {},
}, action) => {
    switch (action.type) {
//---------------------------------------------------------------------------------------------------
        case 'INIT_MULTI_MESSAGES':
            if (state.multipleKey.indexOf(action.data.mesId) != -1) {
                return state
            }
            const initMultiMessages = {
              ...state,
              multipleKey: [
                  ...state.multipleKey,
                  action.data.mesId
              ],
              messagesMap: {
                  ...state.messagesMap,
                  [action.data.mesId]: action.data.messages.reverse()
              }
            }
            console.log('\n[Reducer Center] INIT_MULTI_MESSAGES', action, initMultiMessages);
            return initMultiMessages

  //---------------------------------------------------------------------------------------------------
          case 'UPDATE_MESSAGE':
              const updateMessage = {
                  ...state,
                  messagesMap: {
                      ...state.messagesMap,
                      [action.data.mesId]: [
                          ...action.data.messages.reverse(),
                          ...state.messagesMap[action.data.mesId],
                      ]
                  }
              }
              console.log('\n[Reducer Center] UPDATE_MESSAGE ', action, updateMessage)
              return updateMessage

//---------------------------------------------------------------------------------------------------
        case 'client/ADD_MEMBER':
            if (state.multipleKey.indexOf(action.data.mesId) != -1) {
                return state
            }
            const addMember = {
                ...state,
                // singleKey: [action.data.mesId],
                multipleKey: [
                    ...state.multipleKey,
                    action.data.mesId
                ],
                messagesMap: {
                    [action.data.mesId]: []
                }
            }
            // console.log('\n[Reducer Center] client/ADD_MEMBER', action, addMember);
            return addMember

//---------------------------------------------------------------------------------------------------
        case 'REMOVE_CHAT':
        case 'CLOSE_CHAT':
            const mKey = state.multipleKey
            mKey.splice(mKey.indexOf(action.data.mesId), 1)
            const mMap = state.messagesMap
            delete mMap[action.data.mesId]
            return {
                ...state,
                multipleKey: mKey,
                messagesMap: mMap
            }

//---------------------------------------------------------------------------------------------------
        case 'global/RECEIVE_MESSAGE':
            const { mesId, user, time, message } = action.data
            const chat = state.messagesMap[mesId]
            if (chat == undefined || chat == null) {
              return state
            }

            const msg = {
              ...state,
              messagesMap: {
                ...state.messagesMap,
                [mesId]: [
                    ...state.messagesMap[mesId],
                    {
                        id: user.id,
                        message,
                        time
                    }
                ]
              }
            }
            // console.log('\n[Reducer Center] global/RECEIVE_MESSAGE ', action, msg)
            return msg

//---------------------------------------------------------------------------------------------------
        case 'NEW_CHAT':
            if (action.data.mesId != 0 || state.multipleKey.indexOf('0') != -1) {
              return state
            }
            const newChat = {
                ...state,
                // singleKey: ['0'],
                multipleKey: [
                    ...state.multipleKey,
                    '0'
                ],
                messagesMap: {
                    ...state.messagesMap,
                    '0': []
                }
            }
            // console.log('\n[Reducer Center] NEW_CHAT ', action, newChat)
            return newChat

//---------------------------------------------------------------------------------------------------
        default:
          return state
    }
}

export default center
