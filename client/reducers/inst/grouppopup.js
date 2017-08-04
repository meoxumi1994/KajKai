const grouppopup = (state = {
    popups: [],
}, action) => {
    switch (action.type) {
        case 'global/NOTIFICATION':
            return {
                ...grouppopup,
                popups : [
                    ...state.popups,
                    action.data.id,
                ]
            }
        default:
            return state
    }
}
export default grouppopup
