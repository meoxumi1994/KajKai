import { connect } from 'react-redux'
import Chat from '~/components/chat/left/Chat'

const mapStateToProps = (state, ownProps) => {
    const { user } = state
    const { chatListMap, currentChat } = state.inst.chat.left
    return {
        user,
        chatListMap,
        currentChat: currentChat.mesId,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeNewChat: () => {
        dispatch({type: 'REMOVE_CHAT', data: {mesId: 0}})
    }
})

const ChatContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Chat)

export default ChatContainer
