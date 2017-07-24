import { connect } from 'react-redux'
import { get } from '~/config/allString'

import RowPrivacy from '~/components/profile/middle/RowPrivacy'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({

    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const RowPrivacyContainer = connect(
    mapStateToProps, mapDispatchToProps
)(RowPrivacy)

export default RowPrivacyContainer
