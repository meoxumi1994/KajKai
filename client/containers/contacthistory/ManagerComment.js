import { connect } from 'react-redux'
import { get } from '~/config/allString'

import ManagerComment from '~/components/contacthistory/ManagerComment.js'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        ...state.inst.contacthistory,
        ...state.user
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (key, value) => {
        dispatch({ type: 'INST_CONTACT_HISTORY_CHANGE', key: key, value: value })
    }
})

const ManagerCommentContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ManagerComment)

export default ManagerCommentContainer
