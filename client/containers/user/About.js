import { connect } from 'react-redux'
import { get } from '~/config/allString'

import About from '~/components/user/About'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const AboutContainer = connect(
    mapStateToProps, mapDispatchToProps
)(About)

export default AboutContainer
