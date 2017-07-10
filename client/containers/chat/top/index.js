import { connect } from 'react-redux'
import ChatTop from '~/components/chat/top'
import { getMessages } from '~/actions/asyn/chat/restful'

const mapStateToProps = (state, ownProps) => {
    const { chatListMap, currentChat } = state.inst.chat.left
    return {
      chatListMap,
      currentChat: currentChat.mesId,
      userId: state.user.id
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: (mesId) => {
        dispatch({type: 'REMOVE_CHAT', data: {mesId: mesId}})
    },
    loadChat: (mesId) => {
        dispatch(getMessages(mesId, Date.now(), 10, true, true))
    },
    displayAddMember: (mesId) => {
        dispatch({type: 'DISPLAY_ADD_MEMBER', data: {mesId, value: 'toggle'}})
    },
    setUserId: (id) => {
        dispatch({type: 'SET_USER_ID', data: {id: id}})
    },
    displaySettings: () => {
        dispatch({type: 'DISPLAY_SETTINGS', data: {display: true}})
    }
})

const ChatTopContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatTop)

export default ChatTopContainer
