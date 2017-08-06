import { connect } from 'react-redux'
import { get } from '~/config/allString'

import ContactHistory from '~/components/contacthistory'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const contacthistory = state.inst.contacthistory.index
    return({
        ...contacthistory
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ContactHistoryContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ContactHistory)

export default ContactHistoryContainer
