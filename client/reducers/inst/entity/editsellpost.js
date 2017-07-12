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
                products: [{
                    id: 'product001',
                    list: [''],
                }],
                product_order: ['product001'],
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
        case 'INST_ENTITY_POST_EDIT_SELL_POST_CHANGE':
            return {...state,
                [action.key] : action.value,
            }
        default:
            return state
    }
}
export default editsellpost
