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
        case 'INST_ENTITY_POST_EDIT_SELL_POST_REMOVE_POST_ROW':
            const postrows_order = state.postrows_order
            let removeState = state
            postrows_order.map((item, index) => {
                if(item == action.id){
                    removeState = {
                        ...state,
                        postrows_order: [...postrows_order.slice(0,index), ...postrows_order.slice(index+1,postrows_order.length)]
                    }
                }
            })
            return removeState
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
