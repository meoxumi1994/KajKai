import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Enlarge from '~/components/entity/thumnail/Enlarge'

const mapStateToProps = (state, { sellposts, index }) => {
    const g = (lang) => get(state.user.language, lang)
    const { height, width } = state.inst.app
    const sellpost = state.inst.entity.sellpost[sellposts[index]]
    return({
        height: height,
        width: width,
        FULL_SCREEN: g('FULL_SCREEN'),
        needGetSellPost: (sellpost == undefined),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const EnlargeContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Enlarge)

export default EnlargeContainer
