const bar = (state = {
    keyword: '',
    offset: 0,
    clicksetting: false,
    showNotification: false,
    currentCategory: 'All category',
    currentType: 'category',
    currentCategoryId: -1,
}, action) => {
    switch (action.type) {
        case 'SCREEN_CLICK':
            return {...state,
                clicksetting: false,
                showNotification: false,
            }
        case 'INST_BAR_CHANGE':
            return {...state,
                [action.key] : action.value,
            }
        default:
            return state
    }
}
export default bar
