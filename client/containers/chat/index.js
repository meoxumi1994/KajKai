import { connect } from 'react-redux'
import Chat from '~/components/chat'
import { findName } from '../support'
import chatStyles from '~/components/chat/chatStyles'

const mapStateToProps = (state, ownProps) => {
  const { catagory, currentThemes} = state.inst.chat.display.themes
  const themes = catagory[currentThemes]
  const { messagesKey, messagesMap } = state.inst.chat.center.singleChat
  let styles = chatStyles.getSingleChat(themes)

  return (
    {
      themes,
      messagesKey,
      messagesMap,
      multiChat: false,
      styles,
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentChat: (mesId) => {
      dispatch({type: 'SET_CURRENT_CHAT', mesId})
  },
})

const ChatContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Chat)

export default ChatContainer
