import { connect } from 'react-redux'
import { get } from '~/config/allString'

import EditSellPost from '~/components/entity/post/EditSellPost'
import { postSellPost, putSellPost } from '~/actions/asyn/entity/sellpost'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const editsellpost = state.inst.entity.editsellpost
    const editpostrow = state.inst.entity.editpostrow
    const product = state.inst.entity.editproduct
    const { avatarUrl, storename, id } = state.inst.store.index
    const { height } = state.inst.app
    return({
        ...editsellpost,
        editpostrow: editpostrow,
        product: product,
        height: height,
        avatarUrl: avatarUrl,
        storename: storename,
        id: id,
        TIME: g('TIME'),
        ADD_NEW_CONTENT: g('ADD_NEW_CONTENT'),
        EDIT_SELL_POST: g('EDIT_SELL_POST'),
        CREATE_SELL_POST: g('CREATE_SELL_POST'),
        CLOSE: g('CLOSE'),
        REMOVE: g('REMOVE'),
        MOVE_UP: g('MOVE_UP'),
        MOVE_DOWN: g('MOVE_DOWN'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (key, value) => {
        dispatch({ type: 'INST_ENTITY_POST_EDIT_SELL_POST_CHANGE', key: key, value: value })
    },
    addPostRow: (item, newid) => {
        dispatch({ type: 'INST_ENTITY_POST_EDIT_SELL_POST_ADD_POST_ROW', item: item, newid: newid, time: (new Date()).getTime() })
    },
    removePostRow: (id) => {
        dispatch({ type: 'INST_ENTITY_POST_EDIT_SELL_POST_REMOVE_POST_ROW', id })
    },
    moveUpPostRow: (id) => {
        dispatch({ type: 'INST_ENTITY_POST_EDIT_SELL_POST_MOVE_UP_POST_ROW', id })
    },
    moveDownPostRow: (id) => {
        dispatch({ type: 'INST_ENTITY_POST_EDIT_SELL_POST_MOVE_DOWN_POST_ROW', id })
    },
    createSellPost: (sellpost) => {
        dispatch(postSellPost(sellpost))
    },
    editSellPost: (sellpost) => {
        dispatch(putSellPost(sellpost))
    }
})

const mergerProp = (stateProps, dispatchProps, ownProps) => {
    const { editpostrow, product, status, id, ...anotherState } = stateProps
    const { editSellPost, createSellPost, ...anotherDispatch } = dispatchProps
    return({
        onCreateSellPost: () => {
            let postrows = []
            stateProps.postrows_order.map((item) => {
                    if(editpostrow[item].type == 'product'){
                        let products = []
                        editpostrow[item].products_order.map((item) => {
                            products = [...products, product[item] ]
                        })
                        postrows = [...postrows, {
                            ...editpostrow[item],
                            products: products,
                        }]
                    }else{
                        postrows = [...postrows, editpostrow[item]]
                    }
                }
            )
            const sellpost = {
                ...stateProps,
                postrows: postrows,
                storeid: id,
                status: 'open',
            }
            createSellPost(sellpost)
        },
        onEditSellPost: () => {
            let postrows = []
            stateProps.postrows_order.map((item) => {
                    if(editpostrow[item].type == 'product'){
                        let products = []
                        editpostrow[item].products_order.map((item) => {
                            products = [...products, product[item] ]
                        })
                        postrows = [...postrows, {
                            ...editpostrow[item],
                            products: products,
                        }]
                    }else{
                        postrows = [...postrows, editpostrow[item]]
                    }
                }
            )
            const sellpost = {
                ...stateProps,
                postrows: postrows,
                storeid: id,
                status: status,
            }
            editSellPost(sellpost)
        },
        id: id,
        ...anotherState,
        ...anotherDispatch,
        ...ownProps,
    })
}


const EditSellPostContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProp
)(EditSellPost)

export default EditSellPostContainer
