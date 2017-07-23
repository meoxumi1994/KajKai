const right = (state = {
    isclick: false,
    storename: 'store a',
    phone: '01231231233',
    address: 'fpt university',
    category: 'T-shirt',
}, action) => {
    switch (action.type) {
        case 'REGISTER_STORE_RIGHT_CLICK_REGISTER':
            return { ...state, isclick: true }
        case 'REGISTER_STORE_RIGHT_HANDLE_CHANGE':
            return { ...state, ...action.value }
        default:
            return state
    }
}
export default right
