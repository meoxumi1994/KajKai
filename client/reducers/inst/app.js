const app = (state = {
    width: window.innerWidth,
    height: window.innerHeight,
    scrollTop: 0,
    scrollLeft: 0,
}, action) => {
    switch (action.type) {
        case 'ON_SCROLL_BODY':
            return {
                ...state,
                scrollTop: action.scrollTop,
                scrollLeft: action.scrollLeft,
            }
        case 'SCREEN_RESIZE':
            return {
              ...state,
              width: action.width,
              height: action.height,
            }
        default:
            return state
    }
}

export default app
