import { connect } from 'react-redux'
import { get } from '~/config/allString'
import { getTime } from '~/containers/support'

import SellPost from '~/components/entity/post/SellPost'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const sellpost = state.inst.entity.sellpost[id]
    const store = state.inst.store.index
    const { likes, numlike } = sellpost
    return({
        ...store,
        ...sellpost,
        yourid: state.user.id,
        time: getTime(sellpost.time),
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onLike: () => {
        // console.log('onLike')
    },
    onChange: (key, value) => {
        dispatch({ type: 'INST_ENTITY_SELL_POST_CHANGE', id: id, key: key, value: value })
    }
})

const SellPostContainer = connect(
    mapStateToProps, mapDispatchToProps
)(SellPost)

export default SellPostContainer
