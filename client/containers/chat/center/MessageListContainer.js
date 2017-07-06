import { connect } from 'react-redux'
import MessageList from '~/components/chat/center/MessageList'

const mapStateToProps = (state, ownProps) => {
    const { user } = state
    const { messagesMap } = state.inst.chat.center.singleChat
    const { chatListMap } = state.inst.chat.left
    console.log('--- state ', state.inst.chat);
    return {
        user,
        messagesMap,
        chatListMap
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const MessageListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(MessageList)

export default MessageListContainer
