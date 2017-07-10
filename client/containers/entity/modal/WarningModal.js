import { connect } from 'react-redux'
import { get } from '~/config/allString'

import WarningModal from '~/components/entity/modal/WarningModal'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        WARNING_MODAL: g('WARNING_MODAL'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const WarningModalContainer = connect(
    mapStateToProps, mapDispatchToProps
)(WarningModal)

export default WarningModalContainer
