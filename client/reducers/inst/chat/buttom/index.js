const bottom = (state = {
  url: {
    imageList: [],
    isLoading: true
  }
}, action) => {
    switch (action.type) {
      case 'UPLOADING_IMAGES':
          return {
            ...state,
            url: {
              ...state.url,
              imageList: action.imageList,
              isLoading: action.imageList.length == 0? true: false
            }
          }
        default:
            return state
    }
}

export default bottom
