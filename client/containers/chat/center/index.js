import { connect } from 'react-redux'
import ChatCenter from '~/components/chat/center'
import chatStyles from '~/components/chat/chatStyles'

const mapStateToProps = (state, ownProps) => {
    const { chatListMap } = state.inst.chat.left
    const { messagesKey, currentChat } = state.inst.chat.center
    const { catagory, currentThemes} = state.inst.chat.display.themes
    const themes = catagory[currentThemes]

    // console.log('---STATE ', state.inst.chat);

    let styles
    let mesId
    let multiChat
    if (location.pathname == '/chat') {
        mesId = currentChat
        styles = chatStyles.getBigWindow(themes)
        multiChat = false
    } else {
        mesId = ownProps.mesId
        styles = chatStyles.getSmallWindow(themes)
        multiChat = true
    }

    return {
        chatListMap,
        messagesKey,
        mesId: mesId,
        styles: styles,
        multiChat: multiChat
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
