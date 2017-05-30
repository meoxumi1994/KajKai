import { connect } from 'react-redux'

import Target from '~/components/target'
import { getTarget } from '~/actions/asyn/target'

const mapStateToProps = (state, props) => {
    const { type } = state.inst.target.index
    return({
        iswhoing: (state.auth == 'WHO_ING' || state.auth == 'WAIT'),
        isusername: state.user.username,
        id: props.id,
        type: type,
    })
}

const mapDispatchToProps = (dispatch, props) => ({
    onGetTarget: (id) => {
        dispatch(getTarget(id))
        dispatch({ type: 'server/JOIN_STOREMAINPOST', data: { id: id } })
    }
})

const TargetContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Target)

export default TargetContainer
