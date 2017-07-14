import { connect } from 'react-redux'
import MessageList from '~/components/chat/center/MessageList'

const mapStateToProps = (state, ownProps) => {
    const { user } = state
    const { chatListMap } = state.inst.chat.left
    return {
        user,
        chatListMap
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getMessages: (mesId, multiChat) => {
        dispatch(getMessages(mesId, Date.now(), multiChat))
    },
})

const MessageListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(MessageList)

export default MessageListContainer
