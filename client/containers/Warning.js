import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Warning from '~/components/Warning'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const warning = state.inst.warning
    return({
        ...warning,
        NOT_LOGIN: g('NOT_LOGIN'),
        GO_LOGIN: g('GO_LOGIN'),
        WELCOME_TO_KAJKAI: g('WELCOME_TO_KAJKAI'),
        BAN_REASON_1: g('BAN_REASON_1'),
        BAN_REASON_2: g('BAN_REASON_2'),
        WARNING_MODAL: g('WARNING_MODAL'),
        CLOSE: g('CLOSE'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (key, value) => {
        dispatch({ type: 'INST_WARNING_CHANGE', key, value })
    }
})

const WarningContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Warning)

export default WarningContainer
