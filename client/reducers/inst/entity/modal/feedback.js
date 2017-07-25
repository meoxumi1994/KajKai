const feedback = (state = 'WAIT', action) => {
    switch (action.type) {
        case 'FEED_BACK_ING':
        case 'FEED_BACK_SUCCESS':
        case 'FEED_BACK_FAILED':
            return action.type
        default:
            return state
    }
}
export default feedback
