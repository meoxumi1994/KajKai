import { connect } from 'react-redux'
import ChatTop from '~/components/chat/top'

const mapStateToProps = (state, ownProps) => {
    const { chatListMap } = state.inst.chat.left
    const { currentChat } = state.inst.chat.center.currentChat
    const { user } = state

    return {
      chatListMap,
      currentChat,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: (mesId) => {
        dispatch({type: 'REMOVE_CHAT', mesId})
    },
    loadChat: (mesId) => {
        dispatch({type: 'SET_CURRENT_CHAT', data: {mesId: mesId}})
    }
})

const ChatTopContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatTop)

export default ChatTopContainer
