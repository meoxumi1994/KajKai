import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Enlarge from '~/components/entity/thumnail/Enlarge'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { height, width } = state.inst.app
    return({
        height: height,
        width: width,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const EnlargeContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Enlarge)

export default EnlargeContainer
