import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Left from '~/components/user/Left'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const LeftContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Left)

export default LeftContainer
