import { connect } from 'react-redux'
import ChatCenter from '~/components/chat/center'

const mapStateToProps = (state, ownProps) => {
    const { user } = state
    const { chatListKey, chatListMap } = state.inst.chat.left
    const { messagesKey, messagesMap, currentChat } = state.inst.chat.center
    const { catagory, currentThemes} = state.inst.chat.display.themes
    const themes = catagory[currentThemes]

    return {
        user,
        chatListKey,
        chatListMap,
        messagesKey,
        messagesMap,
        currentChat,
        themes
    }


}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentChat: (mesId) => {
      dispatch({type: 'SET_CURRENT_CHAT', mesId})
  }
})

const ChatCenterContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatCenter)

export default ChatCenterContainer
