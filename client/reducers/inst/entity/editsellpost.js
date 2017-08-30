const editsellpost = (state = {
    category: '',
    description: '',
    status: '',
    ship: '',
    postrows_order: [],
    currentType: 'WAIT',
}, action) => {
    switch (action.type) {
        case 'CREATE_SELL_POST_SUCCESS':
            return {
                ...state,
                currentType: 'CREATE_SELL_POST_SUCCESS',
            }
        case 'CREATE_SELL_POST_ING':
            return {
                ...state,
                currentType: 'CREATE_SELL_POST_ING'
            }
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
        case 'INST_ENTITY_POST_EDIT_SELL_POST_MOVE_UP_POST_ROW':
            const m_postrows_order = [...state.postrows_order]
            let m_moveUpState = state
            state.postrows_order.map((item, index) => {
                if(item == action.id){
                    let tmp = m_postrows_order[index]
                    m_postrows_order[index] = m_postrows_order[index-1]
                    m_postrows_order[index-1] = tmp
                    m_moveUpState = {
                        ...state,
                        postrows_order: m_postrows_order
                    }
                }
            })
            return m_moveUpState
        case 'INST_ENTITY_POST_EDIT_SELL_POST_MOVE_DOWN_POST_ROW':
            const u_postrows_order = [...state.postrows_order]
            let u_moveDownState = state
            state.postrows_order.map((item, index) => {
                if(item == action.id){
                    let tmp = u_postrows_order[index]
                    u_postrows_order[index] = u_postrows_order[index+1]
                    u_postrows_order[index+1] = tmp
                    u_moveDownState = {
                        ...state,
                        postrows_order: u_postrows_order
                    }
                }
            })
            return u_moveDownState
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
