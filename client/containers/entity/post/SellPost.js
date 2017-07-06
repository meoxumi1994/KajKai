import { connect } from 'react-redux'
import { get } from '~/config/allString'
import { getTime } from '~/containers/support'

import SellPost from '~/components/entity/post/SellPost'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const sellpost = state.inst.entity.sellpost[id]
    const { likes, numlike } = sellpost
    return({
        ...sellpost,
        yourid: state.user.id,
        time: getTime(sellpost.time),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLike: () => {
        console.log('onLike')
    }
})

const SellPostContainer = connect(
    mapStateToProps, mapDispatchToProps
)(SellPost)

export default SellPostContainer
