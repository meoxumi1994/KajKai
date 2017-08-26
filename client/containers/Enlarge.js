import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Enlarge from '~/components/Enlarge'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { height, width } = state.inst.app
    return({
        height: height,
        width: width,
        FULL_SCREEN: g('FULL_SCREEN'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const EnlargeContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Enlarge)

export default EnlargeContainer
