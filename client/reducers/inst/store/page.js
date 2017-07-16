const page = (state = {
    showEditSellPost: false,
    stateSellPost: 'WAIT',
    offsetSellPost: -1,
    stateMinorPost: 'WAIT',
    offsetMinorPost: -1,
    minorposts: [],
    sellposts: [],
}, action) => {
    switch (action.type) {
        case 'GET_SELLPOST_FROM_STORE_ING':
        case 'GET_SELLPOST_FROM_STORE_FAILED':
            return {
                ...state,
                stateSellPost: action.type,
            }
        case 'GET_SELLPOST_FROM_STORE_SUCCESS':
            const getIdSellpost = action.sellposts.map((item) => item.id)
            return {
                ...state,
                stateSellPost: action.type,
                offsetSellPost: action.offset,
                sellposts: [...state.sellposts, ...getIdSellpost]
            }
        case 'GET_MINORPOST_FROM_STORE_ING':
        case 'GET_MINORPOST_FROM_STORE_FAILED':
            return {
                ...state,
                stateMinorPost: action.type,
            }
        case 'GET_MINORPOST_FROM_STORE_SUCCESS':
            const getIdMinorpost = action.minorposts.map((item) => item.id)
            return {
                ...state,
                stateMinorPost: action.type,
                offsetMinorPost: action.offset,
                minorposts: [...state.minorposts, ...getIdMinorpost]
            }
        case 'STORE_GET_SUCCESS':
            return {
                stateSellPost: 'WAIT',
                offsetSellPost: -1,
                stateMinorPost: 'WAIT',
                offsetMinorPost: -1,
                minorposts: [],
                sellposts: [],
            }
        case 'CREATE_SELL_POST_SUCCESS':
            return {
                ...state,
                sellposts: [action.sellpost.id, ...state.sellposts],
                showEditSellPost: false,
            }
        case 'INST_STORE_PAGE_CHANGE':
            return {
                ...state,
                [action.key] : action.value,
            }
        default:
            return state
    }
}
export default page
