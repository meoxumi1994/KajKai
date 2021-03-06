import { connect } from 'react-redux'
import { get } from '~/config/allString'
import { getTime, getBeLike, getLikeContent, getBeFollow } from '~/containers/support'
import { getSellPost, deteleSellPost, turnNotify, putSellPost } from '~/actions/asyn/entity/sellpost'
import SellPost from '~/components/entity/post/SellPost'


const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const sellpost = state.inst.entity.sellpost[id]
    const store = state.inst.store.index
    let yourid = state.user.id
    if(sellpost){
        state.user.storeList.map((item) => {
            if(item.id == sellpost.storeid)
                yourid = sellpost.storeid
        })
    }
    let isyour = true
    let beLike, likeContent, time, beFollow
    if(sellpost){
        const { likes, numlike } = sellpost
        beLike =  getBeLike(likes, yourid)
        beFollow = getBeFollow(sellpost.follows, state.user.id)
        likeContent = getLikeContent(likes, numlike, yourid)
        time = getTime(sellpost.time, state.user.language)
    }
    let isOwner = false
    if(sellpost){
        for(let i=0; i< state.user.storeList.length ; i++){
            if(state.user.storeList[i].id == sellpost.storeid){
                isOwner = true
                break
            }
        }
    }
    return({
        ...store,
        ...sellpost,
        id: id ? id : (sellpost ? sellpost.id : undefined),
        mysellpost: sellpost,
        isOwner: isOwner,
        beLike: beLike,
        beFollow: beFollow,
        likeContent: likeContent,
        time: time,
        OPEN: g('OPEN'),
        SLEEP: g('SLEEP'),
        FEED_BACK: g('FEED_BACK'),
        TURN_OFF_NOTIFY: g('TURN_OFF_NOTIFY'),
        TURN_ON_NOTIFY: g('TURN_ON_NOTIFY'),
        EDIT_SELL_POST: g('EDIT_SELL_POST'),
        DELETE_SELL_POST: g('DELETE_SELL_POST'),
        SURE_DELETE_SELL_POST: g('SURE_DELETE_SELL_POST'),
    })
}

const mapDispatchToProps = (dispatch, { id, focuscommentid }) => ({
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
    onGetSellpost: (id, focuscommentid) => {
        dispatch(getSellPost(id, focuscommentid))
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
    },
    weTurnNotify: (turnnotify) => {
        dispatch(turnNotify(id, !turnnotify))
    },
    weUpdateSellpost: (key, value) => {
        dispatch({ type: 'server/CHANGE_SELLPOST', data: { id: id, [key]: value } })
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { turnnotify, mysellpost, category ,description ,status, ship , postrows_order , postrows, ...anotherState } = stateProps
    const { weUpdateSellpost, weTurnNotify, onShowEditSellPost, ...anotherDispatch } = dispatchProps
    return({
        showEditSellPost: () => {
            onShowEditSellPost({ category ,description ,status, ship , postrows_order, postrows, sellpostid: ownProps.id })
        },
        onTurnNotify: () => {
            weTurnNotify(turnnotify)
        },
        onUpdateSellpost: (key, value) => {
            if( key == 'status' ){
                weUpdateSellpost(key, value)
            }
            // weUpdateSellpost({
            //     ...mysellpost,
            //     [key] : value,
            //     sellpostid: mysellpost.id,
            // })
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
