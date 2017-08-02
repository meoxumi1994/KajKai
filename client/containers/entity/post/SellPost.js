import { connect } from 'react-redux'
import { get } from '~/config/allString'
import { getTime, getBeLike, getLikeContent, getBeFollow } from '~/containers/support'
import { getSellPost, deteleSellPost } from '~/actions/asyn/entity/sellpost'
import SellPost from '~/components/entity/post/SellPost'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const sellpost = state.inst.entity.sellpost[id]
    const store = state.inst.store.index
    let yourid = state.user.id
    state.user.storeList.map((item) => {
        if(item.id == store.id)
            yourid = store.id
    })
    let isyour = true
    let beLike, likeContent, time, beFollow
    if(sellpost){
        const { likes, numlike } = sellpost
        beLike =  getBeLike(likes, yourid)
        beFollow = getBeFollow(sellpost.follows, state.user.id)
        likeContent = getLikeContent(likes, numlike, yourid)
        time = getTime(sellpost.time)
    }
    let isOwner = false
    for(let i=0; i< state.user.storeList.length ; i++){
        if(state.user.storeList[i].id == sellpost.storeid){
            isOwner = true
            break
        }
    }
    return({
        ...store,
        ...sellpost,
        isOwner: isOwner,
        beLike: beLike,
        beFollow: beFollow,
        likeContent: likeContent,
        time: time,
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onLike: () => {
        dispatch({ type: 'server/LIKE', data: {
            type: 'sellpost',
            status: 'like',
            sellpostid: id,
        }})
    },
    onChange: (key, value) => {
        dispatch({ type: 'INST_ENTITY_SELL_POST_CHANGE', id: id, key: key, value: value })
    },
    onGetSellpost: () => {
        dispatch(getSellPost(id))
    },
    onDeleteSellpost: () => {
        dispatch(deteleSellPost(id))
    },
    onFollow: () => {
        dispatch({ type: 'server/FOLLOW', data: {
            id: id,
            type: 'sellpost',
        }})
    },
    feedBack: () => {
        dispatch({ type: 'FEED_BACK_ING'})
    },
    onShowEditSellPost: (sellpost) => {
        dispatch({ type: 'INST_STORE_PAGE_CHANGE', key: 'showEditSellPost', value: true })
        dispatch({ type: 'INST_ENTITY_CREATE_EDIT_SELL_POST', sellpost: sellpost })
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { category ,description ,status, ship , postrows_order , postrows, ...anotherState } = stateProps
    const { onShowEditSellPost, ...anotherDispatch } = dispatchProps
    return({
        showEditSellPost: () => {
            onShowEditSellPost({ category ,description ,status, ship , postrows_order, postrows, sellpostid: ownProps.id })
        },
        ...ownProps,
        ...stateProps,
        ...anotherDispatch,
    })
}

const SellPostContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(SellPost)

export default SellPostContainer
