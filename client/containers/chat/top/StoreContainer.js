import { connect } from 'react-redux'
import Store from '~/components/chat/top/Store'

const mapStateToProps = (state, ownProps) => {
    const { chatListMap } = state.inst.chat.left
    return {
        chatListMap,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const StoreContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Store)

export default StoreContainer
