import { connect } from 'react-redux'
import { get } from '~/config/allString'

import ContactComment from '~/components/entity/contact/ContactComment'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({

    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ContactCommentContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ContactComment)

export default ContactCommentContainer
