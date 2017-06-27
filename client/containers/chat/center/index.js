import { connect } from 'react-redux'
import ChatCenter from '~/components/chat/center'
import chatStyles from '~/components/chat/chatStyles'

const mapStateToProps = (state, ownProps) => {
    const { user } = state
    const { chatListKey, chatListMap } = state.inst.chat.left
    const { messagesKey, messagesMap, currentChat } = state.inst.chat.center
    const { catagory, currentThemes} = state.inst.chat.display.themes
    const themes = catagory[currentThemes]

    let styles
    let mesId
    if (location.pathname == '/chat' || location.pathname == undefined) {
        mesId = currentChat
        styles = chatStyles.getBigWindow(themes)
    } else {
        mesId = ownProps.mesId
        styles = chatStyles.getSmallWindow(themes)
    }

    return {
        user,
        chatListKey,
        chatListMap,
        messagesKey,
        messagesMap,
        currentChat,
        themes,
        mesId: mesId,
        styles
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
