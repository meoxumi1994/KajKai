const progress = ( state = {
    showModal: false,
    ratio: 100,
}, action) => {
    switch (action.type) {
        case 'LOAD_IMAGE_ING':
            return {...state, showModal: true, ratio: 0 }
        case 'LOAD_IMAGE_SUCCESS':
        case 'PROGRESS_CLOSE':
            return {...state, showModal: false, ratio: 100 }
        case 'PROGRESS_UP':
            return {...state, ratio: state.ratio + Math.random()*10.0 }
        default:
            return state
    }
}
export default progress
