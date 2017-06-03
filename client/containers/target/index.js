import { connect } from 'react-redux'

import Target from '~/components/target'
import { getTarget } from '~/actions/asyn/target'

const mapStateToProps = (state, ownProps ) => {
    const { type } = state.inst.target.index
    return({
        iswhoing: (state.auth == 'WHO_ING' || state.auth == 'WAIT'),
        isusername: state.user.username,
        type: type,
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onGetTarget: () => {
        dispatch(getTarget(id))
    }
})

const TargetContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Target)

export default TargetContainer
