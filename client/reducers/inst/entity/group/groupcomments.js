const item = (state = {}, action) => {
    switch (action.type) {

        default:
            return state
    }
}

const groupcommets = (state = {
    default: {
        istyping: '',
        listtype: '',
        listcms: [{ id: 'default'},{ id: 'default'},{ id: 'default'}]
    }
}, action) => {
    switch (action.type) {
        case 'client/CHANGE_GROUPCOMMENTS':

            return
        default:
            return state
    }
}

export default groupcommets
