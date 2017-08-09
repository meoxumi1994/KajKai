const createinterest = (state = {
    position: {},
    showModal: false,
    categories: [],
    firstCategory: undefined,
    secondCategory: undefined,
}, action) => {
    switch (action.type) {
        case 'GET_CATEGORY_SUCCESS':
            return {
                ...state,
                categories: action.categories
            }
        case 'INST_ENTITY_MODAL_CREATE_INTEREST':
            return {
                ...state,
                [action.key] : action.value
            }
        case 'CREATE_SUB_INTEREST_SUCCESS':
            return {
                ...state,
                showModal: false,
            }
        default:
            return state
    }
}
export default createinterest
