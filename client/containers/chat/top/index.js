import { connect } from 'react-redux'
import ChatTop from '~/components/chat/top'

const mapStateToProps = (state, ownProps) => {
    const { chatListMap } = state.inst.chat.left
    const { currentChat } = state.inst.chat.center.currentChat
    const { user } = state

    return {
      chatListMap,
      currentChat,
      user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  close: (mesId) => {
    dispatch({type: 'REMOVE_CHAT', mesId})
  },
  setMultiChat: (value) => {
      dispatch({type: 'MULTIPLE_CHAT', data: value})
  }
})

const ChatTopContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatTop)

export default ChatTopContainer
