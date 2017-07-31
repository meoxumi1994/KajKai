const introducestore = (state = {

}, action) => {
    switch (action.type) {
        case 'INTRODUCE_STORE_GET_SUCCESS':
            console.log(action)
            return {...state,
                [action.store.id] : action.store
            }
        default:
            return state
    }
}
export default introducestore
