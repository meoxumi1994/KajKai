import userMap from './user/userMap'
import feedbackMap from './dashboard/feedbackMap'

const utils = {
    getUsersMap: (action) => {
        const usersMap = {}
        action.data.map(element => {
            // console.log('element', element)
            usersMap[element.user.id] = userMap(undefined, {type: action.type, data: {user: element.user, ban: element.ban, stores: element.stores}})
        })
        return usersMap
    },
    getFeedbacksMap: (action) => {
        const feedbacksMap = {}
        action.data.map(feedback =>
            {
              feedbacksMap[feedback.id] = feedbackMap(undefined, {type: action.type, data: feedback})
            }
        )
        return feedbacksMap
    }
}

export default utils
