import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Setting from '~/components/target/middle/user/Setting'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        INFO: g('INFO'),
        PRIVACY: g('PRIVACY'),
        SECURITY: g('SECURITY'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const SettingContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Setting)

export default SettingContainer
