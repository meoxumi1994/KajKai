import { connect } from 'react-redux'
import ChatTop from '~/components/chat/top'

const mapStateToProps = (state, ownProps) => {
    const { chatListMap, currentChat } = state.inst.chat.left
    const { user } = state
    return {
      chatListMap,
      currentChat: currentChat.mesId,
      isNewMessage: currentChat.isNewMessage,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: (mesId) => {
        dispatch({type: 'REMOVE_CHAT', mesId})
    },
    loadChat: (mesId) => {
        dispatch({type: 'SET_CURRENT_CHAT', data: {mesId: mesId}})
    },
    displayAddMember: (mesId) => {
        // console.log(mesId);
        dispatch({type: 'DISPLAY_ADD_MEMBER', data: {mesId, value: 'toggle'}})
    }
})

const ChatTopContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatTop)

export default ChatTopContainer
