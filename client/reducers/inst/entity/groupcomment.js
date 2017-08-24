const groupcomment = (state = {

}, action) => {
    switch (action.type) {
        case 'GET_SELL_POST_SUCCESS':
        case 'CREATE_SELL_POST_SUCCESS':
            return {
                ...state,
                [action.sellpost.id] : {
                    ...action.sellpost,
                    content: '',
                    order: [],
                }
            }
        case 'client/LEADERCOMMENT':
            return {...state,
                [action.data.sellpostid]: {
                    ...state[action.data.sellpostid],
                    numleadercomment: state[action.data.sellpostid].numleadercomment + 1,
                    leadercomments: [...state[action.data.sellpostid].leadercomments,
                        action.data
                    ]
                }
            }
        case 'GET_MORE_LEADERCOMMENT_SUCCESS':
            return {...state,
                [action.id] : {
                    ...state[action.id],
                    offset: action.offset,
                    leadercomments: [
                        ...action.leadercomments,
                        ...state[action.id].leadercomments,
                    ]
                }
            }
        case 'GET_SELLPOST_FROM_STORE_SUCCESS':
            let newstate = state
            action.sellposts.map((sp) => {
                newstate = {...newstate,
                    [sp.id] : {
                        id: sp.id,
                        offset: sp.offset,
                        leadercomments: sp.leadercomments,
                        numleadercomment: sp.numleadercomment,
                        content: '',
                        order: [],
                    }
                }
            })
            return newstate
        case 'INST_ENTITY_PRODUCT_CLICK_ADD':
            let oldorder = state[action.sellpostId].order
            let neworder = new Array()
            let added = false
            oldorder.map((item,index) => {
                if(item.id == action.product.id){
                    neworder = [...neworder, {...item, num: item.num + 1 }]
                    added = true
                }else{
                    neworder = [...neworder, item]
                }
            })
            if(!added){
                neworder = [...neworder, action.product]
            }

            return {...state,
                [action.sellpostId] : {
                    ...state[action.sellpostId],
                    order: neworder,
                }
            }
        case 'INST_ENTITY_PRODUCT_CLICK_REMOVE':
            let moldorder = state[action.sellpostId].order
            let mneworder = new Array()
            moldorder.map((item,index) => {
                if(index == action.index){
                    if(item.num > 1)
                        mneworder = [...mneworder, {...item, num: item.num - 1 }]
                }else{
                    mneworder = [...mneworder, item]
                }
            })
            return {...state,
                [action.sellpostId] : {
                    ...state[action.sellpostId],
                    order: mneworder,
                }
            }
        case 'INST_ENTITY_GROUPCOMMENT_CHANGE':
            return {...state,
                [action.id] : {...state[action.id],
                    [action.key] : action.value,
                }
            }
        default:
            return state
    }
}
export default groupcomment
