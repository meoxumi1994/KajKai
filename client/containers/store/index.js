import { connect } from 'react-redux'

import Store from '~/components/store'
import { getStore } from '~/actions/asyn/store'

const mapStateToProps = (state, ownProps ) => {
    const { scrollTop, scrollLeft, height } = state.inst.app
    return({
        storeid: ownProps.location.pathname.split('/')[1],
        store: state.inst.store.index,
        iswhoing: (state.auth == 'WHO_ING' || state.auth == 'WAIT' || !state.inst.store.index.id),
        isusername: state.user.username,
        scrollTop: scrollTop,
        scrollLeft: scrollLeft,
        height: height,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetStore: (storeid) => {
        dispatch(getStore(storeid))
    }
})

const StoreContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Store)

export default StoreContainer
