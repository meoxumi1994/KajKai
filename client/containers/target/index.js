import { connect } from 'react-redux'

import Target from '~/components/target'
import { getTarget } from '~/actions/asyn/target'

const mapStateToProps = (state, props) => {
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
