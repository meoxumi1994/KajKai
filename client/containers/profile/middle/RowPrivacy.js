import { connect } from 'react-redux'
import allString from '~/config/allString'

import RowPrivacy from '~/components/profile/middle/RowPrivacy'

const mapStateToProps = (state, ownProps) => ({
    g : (lang) => allString.get(state.user.language, lang),
    
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const RowPrivacyContainer = connect(
    mapStateToProps, mapDispatchToProps
)(RowPrivacy)

export default RowPrivacyContainer
