const addPostRow = (item, time) => {
    switch (item) {
        case 'title':
        case 'normal':
            return {
                type: item,
                content: '',
            }
        case 'textimage':
        case 'imagetext':
            return {
                type: item,
                content: '',
                images: [],
            }
        case 'product':
            return {
                type: item,
                products_order: [time],
                numline: 1,
            }
        case 'listproduct':
            return {
                type: item,
                products_order: [time],
                numline: 6,
            }
        case 'groupimage':
            return {
                type: item,
                images: [],
                numline: 12,
            }
        default:
            return;
    }
}

const editpostrow = (state = {}, action) => {
    switch (action.type) {
        case 'INST_STORE_PAGE_CHANGE':
            if(action.key == 'showEditSellPost'){
                return {}
            }
            return state
        case 'INST_ENTITY_POST_EDIT_SELL_POST_ADD_POST_ROW':
            return {...state,
                ['postrow' + action.newid] : addPostRow(action.item, action.time)
            }
        case 'INST_ENTITY_POST_EDIT_SELL_POST_CHANGE_POST_ROW':
            return {...state,
                [action.item] : {...state[action.item],
                    [action.key] : action.value
                }
            }
        default:
            return state
    }
}

export default editpostrow
