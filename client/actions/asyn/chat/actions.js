export const initChatList = (data, lazyLoad) => ({
    type: 'INIT_CHAT_LIST',
    data: data,
    lazyLoad: lazyLoad
})

export const addChat = (data) => ({
    type: 'INIT_MESSAGES',
    data: data
})

export const setCurrentChat = (mesId) => ({
    type: 'CURRENT_CHAT',
    subType: 'SET_CURRENT_CHAT',
    data: {
      mesId
    }
})

export const setUserId = (id) => ({
    type: 'CURRENT_CHAT',
    subType: 'SET_USER_ID',
    data: {
        id
    }
})

export const updateUserInfo = (mesId, id, username, avatarUrl) => ({
    type: 'UPDATE_USER_INFO',
    data: {
        mesId,
        id,
        username,
        avatarUrl,
    }
})

export const changeDisplay = (subType, mesId, value) => ({
    type: 'CHANGE_DISPLAY',
    subType,
    data: {
        mesId,
        value
    }
})

export const removeChat = (mesId) => ({
    type: 'REMOVE_CHAT',
    data: {
        mesId
    }
})

/**
 ** SEARCH
**/
export const search_addMember = (mesId, user) => ({
    type: 'SEARCH',
    subType: 'ADD_MEMBER',
    data: {
        mesId: mesId,
        user: user
    }
})

export const search_removeMember = (mesId, id) => ({
    type: 'SEARCH',
    subType: 'REMOVE_MEMBER',
    data: {
        mesId,
        id
    }
})

export const search_resetResult = () => ({
    type: 'SEARCH',
    subType: 'RESET_RESULTS'
})
