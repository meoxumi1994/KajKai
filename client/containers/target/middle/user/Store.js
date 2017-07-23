import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Store from '~/components/target/middle/user/Store'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const StoreContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Store)

export default StoreContainer
