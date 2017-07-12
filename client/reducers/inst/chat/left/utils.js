import chatMap from './chatMap'
import userMap from './userMap'

const utils = {
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
    }
}

export default utils
