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
        case 'listproduct':
            return {
                type: item,
                product_order: [time],
            }
        case 'groupimage':
            return {
                type: item,
                images: [],
            }
        default:
            return;
    }
}

const editpostrow = (state = {}, action) => {
    switch (action.type) {
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
