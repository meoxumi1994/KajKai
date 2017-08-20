const category = (state = [], action) => {
  switch (action.type) {
    case 'GET_CATEGORY_SUCCESS':
    const { categories } = action
      return categories
    default:
      return state
  }
}

export default category
