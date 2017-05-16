import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Store from '~/components/store'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { index } = state.inst.store.index
    return({
        index: index,
        isusername: state.user.username,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const StoreContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Store)

export default StoreContainer
