import { connect } from 'react-redux'
import ChatCenter from '~/components/chat/center'
import chatStyles from '~/components/chat/chatStyles'

const mapStateToProps = (state, ownProps) => {
    const { chatListMap } = state.inst.chat.left
    return {
        chatListMap,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    setCurrentChat: (mesId) => {
        dispatch({type: 'SET_CURRENT_CHAT', data: {mesId: mesId}})
    }
})

const ChatCenterContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatCenter)

export default ChatCenterContainer
