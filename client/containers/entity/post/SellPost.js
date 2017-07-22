import { connect } from 'react-redux'
import { get } from '~/config/allString'
import { getTime, getBeLike, getLikeContent } from '~/containers/support'
import { getSellPost } from '~/actions/asyn/entity/sellpost'
import SellPost from '~/components/entity/post/SellPost'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const sellpost = state.inst.entity.sellpost[id]
    const store = state.inst.store.index
    let beLike, likeContent, time
    if(sellpost){
        const { likes, numlike } = sellpost
        beLike =  getBeLike(likes, state.user.id)
        likeContent = getLikeContent(likes, numlike, state.user.id)
        time = getTime(sellpost.time)
    }
    return({
        ...store,
        ...sellpost,
        beLike: beLike,
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
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { ...anotherState } = stateProps
    const { ...anotherDispatch } = dispatchProps
    return({
        ...ownProps,
        ...anotherState,
        ...anotherDispatch,
    })
}

const SellPostContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(SellPost)

export default SellPostContainer
