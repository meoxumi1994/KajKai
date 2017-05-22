import { connect } from 'react-redux'

import Target from '~/components/target'
import { getTarget } from '~/actions/asyn/target'

const mapStateToProps = (state, props) => {
    console.log("target", state.target)
    console.log("target", state.inst.target.index)
    return({
        iswhoing: (state.auth == 'WHO_ING' || state.auth == 'WAIT'),
        isusername: state.user.username,
        id: props.id,
    })
}

const mapDispatchToProps = (dispatch, props) => ({
    onGetTarget: (id) => {
        dispatch(getTarget(id))
    }
})

const TargetContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Target)

export default TargetContainer
