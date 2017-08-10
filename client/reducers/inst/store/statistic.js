const statictics = (state = {
    myState: 'WAIT',
    current: new Date(),
    statictics: [],
    numday: 7,
}, action) => {
    switch (action.type) {
        case 'INST_STORE_STATISTIC_CHANGE':
            console.log(action)
            return {
                ...state,
                [action.key] : action.value
            }
        case 'GET_STORE_STATICTIS_ING':
        case 'GET_STORE_STATICTIS_FAILED':
            return {
                ...state,
                myState: action.type,
            }
        case 'GET_STORE_STATICTIS_SUCCESS':
            return {
                ...state,
                myState: action.type,
                statistics: action.statistics
            }
        default:
            return state
    }
}
export default statictics
