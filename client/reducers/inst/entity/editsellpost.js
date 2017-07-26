const editsellpost = (state = {
    category: '',
    description: '',
    status: '',
    ship: '',
    postrows_order: [],
}, action) => {
    switch (action.type) {
        case 'INST_STORE_PAGE_CHANGE':
            if(action.key == 'showEditSellPost'){
                return {
                    isCreate: true,
                    category: '',
                    description: '',
                    status: '',
                    ship: '',
                    postrows_order: [],
                }
            }
            return state
        case 'INST_ENTITY_POST_EDIT_SELL_POST_ADD_POST_ROW':
            return {...state,
                postrows_order: [...state.postrows_order, 'postrow' + state.postrows_order.length],
            }
        case 'INST_ENTITY_POST_EDIT_SELL_POST_CHANGE':
            return {...state,
                [action.key] : action.value,
            }
        case 'INST_ENTITY_CREATE_EDIT_SELL_POST':
            return {...action.sellpost,
                isCreate: false,
            }
        default:
            return state
    }
}
export default editsellpost
