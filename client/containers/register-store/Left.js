import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Left from '~/components/register-store/Left'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        STORE: g('STORE')
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const LeftContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Left)

export default LeftContainer
