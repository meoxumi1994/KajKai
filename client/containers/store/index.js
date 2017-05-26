import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Store from '~/components/store'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { index } = state.inst.store.index
    return({
        iswhoing: (state.auth == 'WHO_ING' || state.auth == 'WAIT'),
        isusername: state.user.username,
        index: index,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
     
})

const StoreContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Store)

export default StoreContainer
