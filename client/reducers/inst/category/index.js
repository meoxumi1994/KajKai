const category = (state = [
    {
        id: 'category001',
        name: 'Shirt',
        secondCategories: [
            {
                id: 'secondcategory001',
                name: 'R-shirt',
            },
            {
                id: 'secondcategory002',
                name: 'T-shirt',
            }
        ]
    },
    {
        id: 'category002',
        name: 'Food',
        secondCategories: [
            {
                id: 'secondcategory003',
                name: 'Fast Food',
            },
            {
                id: 'secondcategory004',
                name: 'Nutri Food',
            }
        ]
    },
], action) => {
  switch (action.type) {
    case 'LOADED_CATEGORY':
    const { categories } = action
      return categories
    default:
      return state
  }
}

export default category
