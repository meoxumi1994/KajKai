import { connect } from 'react-redux'
import MessageList from '~/components/chat/center/MessageList'
import { getMessages } from '~/actions/asyn/chat/restful'

const mapStateToProps = (state, ownProps) => {
    const { user } = state
    const { chatListMap } = state.inst.chat.left
    const { messagesMap } = state.inst.chat.center
    return {
        user,
        chatListMap,
        messagesMap
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getMessages: (mesId, offset) => {
        dispatch(getMessages(mesId, offset, 'update'))
    },
})

const MessageListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(MessageList)

export default MessageListContainer
