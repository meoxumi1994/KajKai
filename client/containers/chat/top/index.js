import { connect } from 'react-redux'
import ChatTop from '~/components/chat/top'
import { getMessages } from '~/actions/asyn/chat/restful'

const mapStateToProps = (state, ownProps) => {
    const { chatListMap, currentChat } = state.inst.chat.left
    const { multipleKey } = state.inst.chat.center
    return {
      chatListMap,
      multipleKey,
      currentChat,
      userId: state.user.id
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: (mesId, multipleKey) => {
        dispatch({type: 'CLOSE_CHAT', data: {mesId, newMesId: multipleKey[multipleKey.length - 2]}})
    },
    loadChat: (mesId) => {
        dispatch(getMessages(mesId, Date.now(), 10))
    },
    displayAddMember: (mesId) => {
        // dispatch({type: 'USER_DISPLAY/ADD_MEMBER', data: {mesId, value: 'toggle'}})
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
