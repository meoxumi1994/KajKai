const language = (state = 'VIETNAMESE', action) => {
    switch (action.type) {
        case 'VIETNAMESE':
            return 'VIETNAMESE'
        case 'ENGLISH':
            return 'ENGLISH'
        default:
            return state
    }
}

export default language
