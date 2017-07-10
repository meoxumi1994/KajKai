const addPostRow = (item) => {
    switch (item) {
        case 'title':
        case 'normal':
            return {
                type: item,
                content: '',
            };
        case 'textimage':
        case 'imagetext':
            return {
                type: item,
                content: '',
                images: [],
            };
        case 'product':
        case 'listproduct':
            return {
                type: item,
                products: [],
                product_order: [],
            };
        case 'groupimage':
            return {
                type: item,
                images: [],
            };
        default:
            return;
    }
}

const editsellpost = (state = {
    category: '',
    description: '',
    status: '',
    ship: '',
    postrows_order: [],
}, action) => {
    switch (action.type) {
        case 'INST_ENTITY_POST_EDIT_SELL_POST_ADD_POST_ROW':
            return {...state,
                postrows_order: [...state.postrows_order, 'postrow' + state.postrows_order.length],
            }
        default:
            return state
    }
}
export default editsellpost
