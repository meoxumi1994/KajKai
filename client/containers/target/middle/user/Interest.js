import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Interest from '~/components/target/middle/user/Interest'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const InterestContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Interest)

export default InterestContainer
