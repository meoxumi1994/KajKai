import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Contact from '~/components/target/middle/user/Contact'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ContactContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Contact)

export default ContactContainer
