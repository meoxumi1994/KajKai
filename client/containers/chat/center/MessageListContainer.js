import { connect } from 'react-redux'
import MessageList from '~/components/chat/center/MessageList'
import { getMessages } from '~/actions/asyn/chat/restful'
import { changeDisplay } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
    const { user } = state
    const { chatListMap } = state.inst.chat.left
    const { messagesMap } = state.inst.chat.center
    return {
        user,
        chatListMap,
        messagesMap,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getMessages: (mesId, offset) => {
        dispatch(getMessages(mesId, offset, 'update'))
    },
    hideAddMember: (mesId) => {
        // dispatch(changeDisplay('ADD_MEMBER', mesId, false))
    }
})

const MessageListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(MessageList)

export default MessageListContainer
