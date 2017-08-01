const introducestore = (state = {

}, action) => {
    switch (action.type) {
        case 'INTRODUCE_STORE_GET_SUCCESS':
            return {...state,
                [action.store.id] : action.store
            }
        default:
            return state
    }
}
export default introducestore
