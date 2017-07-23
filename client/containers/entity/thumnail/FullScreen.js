import { connect } from 'react-redux'
import { get } from '~/config/allString'

import FullScreen from '~/components/entity/thumnail/FullScreen'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { height, width } = state.inst.app
    return({
        height: height,
        width: width
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const FullScreenContainer = connect(
    mapStateToProps, mapDispatchToProps
)(FullScreen)

export default FullScreenContainer
