import { connect } from 'react-redux'
import allString from '~/config/allString'

import { changeLanguage } from '~/actions/asyn/profile/middle'
import Middle from '~/components/profile/middle'

const mapStateToProps = (state, ownProps) => ({
    g : (lang) => allString.get(state.user.language, lang),
    username: state.user.username,
    imageUrl: state.user.imageUrl,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeLanguage: (language)=> {
        dispatch(changeLanguage(language))
    }
})

const MiddleContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Middle)

export default MiddleContainer
