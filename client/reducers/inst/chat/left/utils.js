import chatMap from './chatMap'
import userMap from './userMap'

const utils = {
    /**
    ** INITIAL CHAT
    **/
    chatListMap: (action) => {
        const chatListMap = {}
        for (let i in action.data) {
            chatListMap[action.data[i].mesId] = chatMap(undefined, {type: action.type, data: action.data[i]})
        }
        return chatListMap
    },
    usersMap: (action, users) => {
        const usersMap = {}
        for (let i in users) {
            usersMap[users[i].id] = userMap(undefined, {type: action.type, data: users[i]})
        }
        return usersMap
    },
    displayLabel: (users) => {
        let displayLabel = ''
        for (let i in users) {
            displayLabel += users[i].username + ', '
        }
        return displayLabel.substring(0, displayLabel.length - 2)
    },
    /**
    ** GROUP CHAT
    **/
    groupUsersKey: (action, members, id) => {
        const groupUsersKey = []
        for (let i in members) {
          if (members[i].id != id) {
              groupUsersKey.push(members[i].id)
          }
        }
        return groupUsersKey
    },
    groupUsersMap: (action, members, id) => {
        const groupUsersMap = {}
        for (let i in members) {
            if (members[i].id != id) {
                groupUsersMap[members[i].id] = userMap(undefined, {type: action.type, data: members[i]})
            }
        }
        return groupUsersMap
    },
    groupDisplayLabel: (members, usersKey, id) => {
        let groupDisplayLabel = ''
        for (let i in members) {
            if (usersKey.indexOf(members[i].id) == -1 && members[i].id != id) {
                groupDisplayLabel += members[i].username + ', '
            }
        }
        return groupDisplayLabel.substring(0, groupDisplayLabel.length - 2)
    },
    /**
    ** SEARCH
    **/
    searchUsersMap: (action, users) => {
        const usersMap = {}
        for (let i in users) {
            usersMap[users[i].userId] = userMap(undefined, {type: action.type, subType: action.subType, data: users[i]})
        }
        return usersMap
    },
    /**
    ** COMMON
    **/
    deleteMapElement: (id, map) => {
        const tempMap = map
        delete tempMap[id]
        return tempMap
    },
    deleteListElement: (id, list) => {
        const tempList = list
        tempList.splice(tempList.indexOf(id), 1)
        return tempList
    }
}

export default utils
