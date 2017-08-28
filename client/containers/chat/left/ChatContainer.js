import { connect } from 'react-redux'
import Chat from '~/components/chat/left/Chat'
import { get } from '~/config/allString'

const mapStateToProps = (state, ownProps) => {
    const { user } = state
    const { chatListMap, currentChat } = state.inst.chat.left
    const g = (lang) => get(state.user.language, lang)
    return {
        user,
        chatListMap,
        currentChat: currentChat.mesId,
        NEW_MESSAGE: g('NEW_MESSAGE'),
        SENT_A_PICTURE: g('SENT_A_PICTURE'),
        YOU_SENT: g('YOU_SENT'),
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
