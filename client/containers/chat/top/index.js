import { connect } from 'react-redux'
import ChatTop from '~/components/chat/top'

const mapStateToProps = (state, ownProps) => {
    const { chatListMap, currentChat } = state.inst.chat.left
    const { user } = state
    // console.log('--- tag: ', state.inst.chat.left);
    // console.log('--- state ', state.inst.chat);
    return {
      chatListMap,
      currentChat: currentChat.mesId,
      isNewMessage: currentChat.isNewMessage,
      tags: state.inst.chat.left.tags
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: (mesId) => {
        dispatch({type: 'REMOVE_CHAT', mesId})
    },
    loadChat: (mesId) => {
        dispatch({type: 'SET_CURRENT_CHAT', data: {mesId: mesId}})
    },
    handleDelete: (tag) => {
        dispatch({type: 'REMOVE_TAG', tag: tag})
    },
    handleAddition: (tag) => {
        dispatch({type: 'ADD_TAG', tag: tag})
    }
})

const ChatTopContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatTop)

export default ChatTopContainer
