import { connect } from 'react-redux'
import ChatCenter from '~/components/chat/center'

const mapStateToProps = (state, ownProps) => {
    const { user } = state
    const { chatListKey, chatListMap } = state.inst.chat.left
    const { messagesKey, messagesMap, currentChat } = state.inst.chat.center
    const { catagory, currentThemes} = state.inst.chat.display.themes
    const themes = catagory[currentThemes]
    const { isMultipleChat } = state.inst.chat.display
    return {
        user,
        chatListKey,
        chatListMap,
        messagesKey,
        messagesMap,
        currentChat,
        themes,
        isMultipleChat
    }


}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentChat: (mesId) => {
      dispatch({type: 'SET_CURRENT_CHAT', mesId})
  },
  setMultipleChat: (isMultipleChat) => {
      dispatch({type: 'IS_MULTIPLE_CHAT', isMultipleChat: isMultipleChat})
  }
})

const ChatCenterContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatCenter)

export default ChatCenterContainer
