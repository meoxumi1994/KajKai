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
    display: {
        addMember: false,
        setting: false,
        search: false,
        imageModal: false,
        editingLabel: false
    },
    imagesUrl: [

    ],
    search: {
        results: {
            keyy: [],
            mapp: {}
        },
        suggestions: {
            keyy: [],
            mapp: {}
        }
    },
}, action, subAction) => {

    switch (action.type || subAction.type) {

//------------------------------------------------------------------------------
        case 'INIT_CHAT_LIST':
            return {
                ...state,
                mesId: action.data.mesId,
                lastMessage: action.data.lastMessage,
                displayLabel: action.data.displayLabel,
                usersKey: action.data.users.map(user => user.id),
                usersMap: utils.usersMap(action, action.data.users),
            }

//------------------------------------------------------------------------------
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

//------------------------------------------------------------------------------
        case 'NEW_CHAT':
            return {
                ...state,
                lastMessage: undefined,
                mesId: action.data.mesId,
                usersKey: [],
                usersMap: {},
            }

//------------------------------------------------------------------------------
        case 'client/ADD_MEMBER':
            if (subAction.type == 'NEW_GROUP') {
                return {
                    ...state,
                    mesId: action.data.mesId,
                    lastMessage: undefined,
                    displayLabel: utils.groupDisplayLabel(action.data.members, subAction.data.id),
                    usersKey: utils.groupUsersKey(action, action.data.members, subAction.data.id),
                    usersMap: utils.groupUsersMap(action, action.data.members, subAction.data.id),
                }
            } else {
              return {
                  ...state
              }
            }

//------------------------------------------------------------------------------
        case 'CHANGE_DISPLAY':
            switch (action.subType) {
                case 'ADD_MEMBER':
                    return {
                        ...state,
                        display: {
                            ...state.display,
                            addMember: utils.displayToggle(action.data.value, state.display.addMember)
                        }
                    }
                case 'SETTING':
                    return {
                        ...state,
                        display: {
                            ...state.display,
                            setting: utils.displayToggle(action.data.value, state.display.setting)
                        }
                    }
                case 'SEARCH':
                    return {
                        ...state,
                        display: {
                            ...state.display,
                            search: utils.displayToggle(action.data.value, state.display.search)
                        }
                    }
                case 'IMAGE_MODAL':
                    return {
                      ...state,
                      display: {
                          ...state.display,
                          imageModal: utils.displayToggle(action.data.value, state.display.imageModal)
                      }
                    }
                case 'EDITING_LABEL':
                    return {
                      ...state,
                      display: {
                          ...state.display,
                          editingLabel: utils.displayToggle(action.data.value, state.display.editingLabel)
                      }
                    }
              default:
                return state
            }

//------------------------------------------------------------------------------
        case 'SEARCH':
            switch (action.subType) {
                case 'ADD_SUGGESTIONS':
                    return {
                        ...state,
                        search: {
                            ...state.search,
                            suggestions:{
                                keyy: action.data.users.map(user => user.userId),
                                mapp: utils.searchUsersMap(action, action.data.users)
                            }
                        }
                    }
                case 'ADD_MEMBER':
                    return {
                        ...state,
                        search: {
                            ...state.search,
                            results: {
                                keyy: [
                                    ...state.search.results.keyy,
                                    action.data.user.id
                                ],
                                mapp: {
                                    ...state.search.results.mapp,
                                    [action.data.user.id]: userMap(undefined, action)
                                }
                            }
                        }
                    }

                case 'REMOVE_MEMBER':
                    const tempKeyResult = state.search.results.keyy
                    const tempMapResult = state.search.results.mapp

                    tempKeyResult.splice(tempKeyResult.indexOf(action.data.id), 1)
                    delete tempMapResult[action.data.id]

                    return {
                        ...state,
                        search: {
                            ...state.search,
                            results: {
                                keyy: tempKeyResult,
                                mapp: tempMapResult
                            }
                        }
                    }

                case 'RESET_RESULTS':
                    return {
                        ...state,
                        search: {
                            ...state.search,
                            results: {
                                keyy: [],
                                mapp: {}
                            }
                        }
                    }
                default:
                  return state
            }

//------------------------------------------------------------------------------
        case 'UPDATE_USER_INFO':
              return {
                  ...state,
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
                  }
              }
              case 'client/UPDATE_UI':
                  return {
                      ...state,
                      displayLabel: action.data.data.groupName
                  }

              case 'CHAT/UPDATE':
                  switch (action.subType) {
                    case 'LOAD_IMAGES_URL':
                        if (state.imagesUrl.indexOf(action.data.url) != -1) {
                            return state
                        }
                        return {
                            ...state,
                            imagesUrl: [
                                ...state.imagesUrl,
                                action.data.url
                            ]
                        }
                    case 'RESET_IMAGES_URL':
                        return {
                            ...state,
                            imagesUrl: []
                        }
                    default:
                        return state
                  }
//------------------------------------------------------------------------------
        default:
            return state
    }
}

export default chatMap
