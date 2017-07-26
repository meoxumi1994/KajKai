import { connect } from 'react-redux'
import { get } from '~/config/allString'

import EditSellPost from '~/components/entity/post/EditSellPost'
import { postSellPost, putSellPost } from '~/actions/asyn/entity/sellpost'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const editsellpost = state.inst.entity.editsellpost
    const editpostrow = state.inst.entity.editpostrow
    const product = state.inst.entity.product
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
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (key, value) => {
        dispatch({ type: 'INST_ENTITY_POST_EDIT_SELL_POST_CHANGE', key: key, value: value })
    },
    addPostRow: (item, newid) => {
        dispatch({ type: 'INST_ENTITY_POST_EDIT_SELL_POST_ADD_POST_ROW', item: item, newid: newid, time: (new Date()).getTime() })
    },
    createSellPost: (sellpost) => {
        dispatch(postSellPost(sellpost))
    },
    editSellPost: (sellpost) => {
        dispatch(putSellPost(sellpost))
    }
})

const mergerProp = (stateProps, dispatchProps, ownProps) => {
    const { editpostrow, product, id, ...anotherState } = stateProps
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
                status: 'notyet',
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
                status: 'notyet',
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
