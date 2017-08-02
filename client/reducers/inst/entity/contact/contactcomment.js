const contactcomment = (state = {

}, action) => {
    switch (action.type) {
        case 'GET_CONTACT_USER_SUCCESS':
            return {...state,
                
            }
        case 'GET_CONTACT_STORE_SUCCESS':
            return {...state,

            }
        default:
            return state
    }
}

export default contactcomment
