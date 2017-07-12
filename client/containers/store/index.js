import { connect } from 'react-redux'

import Store from '~/components/store'
import { getStore } from '~/actions/asyn/store'

const mapStateToProps = (state, ownProps ) => {
    return({
        store: state.inst.store,
        iswhoing: (state.auth == 'WHO_ING' || state.auth == 'WAIT'),
        isusername: state.user.username,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetStore: () => {
        dispatch(getStore(ownProps.location.pathname.split('/')[1]))
    }
})

const StoreContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Store)

export default StoreContainer
