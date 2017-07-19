import userMap from './user/userMap'

const utils = {
    getUsersMap: (action) => {
        const usersMap = {}
        action.data.map(user =>
            usersMap[user.id] = userMap(undefined, {type: action.type, data: user})
        )
        return usersMap
    }
}

export default utils
