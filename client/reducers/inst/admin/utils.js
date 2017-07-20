import userMap from './user/userMap'
import feedbackMap from './dashboard/feedbackMap'

const utils = {
    getUsersMap: (action) => {
        const usersMap = {}
        action.data.map(user =>
            usersMap[user.id] = userMap(undefined, {type: action.type, data: user})
        )
        return usersMap
    },
    getFeedbacksMap: (action) => {
        const feedbacksMap = {}
        action.data.map(feedback =>
            feedbacksMap[feedback.id] = feedbackMap(undefined, {type: action.type, data: feedback})
        )
        return feedbacksMap
    }
}

export default utils
