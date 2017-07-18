import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { getSellPost, getMinorPost } from '~/actions/asyn/store'

import Page from '~/components/store/Page'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const store = state.inst.store.index
    const { scrollTop, scrollLeft, height } = state.inst.app
    let isOwner = false
    for(let i=0; i< state.user.storeList.length ; i++){
        if(state.user.storeList[i].id == id){
            isOwner = true
            break
        }
    }
    return({
        ...store,
        ...state.inst.store.page,
        isOwner: isOwner,
        scrollTop: scrollTop,
        scrollLeft: scrollLeft,
        height: height,
        BY: g('BY'),
        LIKE : g('LIKE'),
        FOLLOW : g('FOLLOW'),
        ADDRESSMAP : g('ADDRESSMAP'),
        ADDRESS : g('ADDRESS'),
        CATEGORY : g('CATEGORY'),
        PHONE : g('PHONE'),
        ANOTHER_PEOPLE: g('ANOTHER_PEOPLE'),
        AND: g('AND'),
        THIS: g('THIS'),
        PEOPLE: g('PEOPLE'),
        CREATE_SELLPOST: g('CREATE_SELLPOST'),
        CREATE_MINORPOST: g('CREATE_MINORPOST'),
        CREATE_SELLPOST_DESCRIPTTION: g('CREATE_SELLPOST_DESCRIPTTION'),
        CREATE_SELLPOST_DESCRIPTTION_1: g('CREATE_SELLPOST_DESCRIPTTION_1'),
        CREATE_SELLPOST_DESCRIPTTION_2: g('CREATE_SELLPOST_DESCRIPTTION_2'),
        CREATE_SELLPOST_DESCRIPTTION_3: g('CREATE_SELLPOST_DESCRIPTTION_3'),
    })
}

const mapDispatchToProps = (dispatch, props) => ({
    needSellPost: (id, offsetSellPost) => {
        dispatch(getSellPost(id, offsetSellPost))
    },
    needMinorPost: (id, offsetMinorPost) => {
        dispatch(getMinorPost(id, offsetMinorPost))
    },
    onChange: (key, value) => {
        dispatch({ type: 'INST_STORE_PAGE_CHANGE', key: key, value: value })
    }
})

const mergerProp = (stateProps, dispatchProps, ownProps) => {
    const { stateSellPost, stateMinorPost, offsetSellPost, offsetMinorPost, id , ...anotherState } = stateProps
    const { needSellPost, needMinorPost, ...anotherDispatch } = dispatchProps
    return {
        onNeedSellPost: () => {
            if(stateSellPost != 'GET_SELLPOST_FROM_STORE_ING' && offsetSellPost != -2){
                needSellPost(id, offsetSellPost)
            }
        },
        onNeedMinorPost: () => {
            if(stateMinorPost != 'GET_MINORPOST_FROM_STORE_ING' && offsetMinorPost != -2){
                needMinorPost(id, offsetMinorPost)
            }
        },
        id: id,
        stateSellPost: stateSellPost,
        offsetSellPost: offsetSellPost,
        offsetMinorPost: offsetMinorPost,
        ...anotherState,
        ...anotherDispatch,
    }
}

// const mergerProp = (stateProps, dispatchProps, ownProps) => {
//     const { storeId, content, ...anotherState } = stateProps
//     const { onHandleKeyPress, ...anotherDispatch } = dispatchProps
//     return({
//         ...anotherState,
//         ...anotherDispatch,
//         ...ownProps,
//         content: content,
//         onHandleKeyPress: (e) => onHandleKeyPress(e, content, storeId)
//     })
// }

const PageContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProp
)(Page)

export default PageContainer
