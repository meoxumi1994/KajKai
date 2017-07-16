import { connect } from 'react-redux'
import ChatTop from '~/components/chat/top'
import { getMessages } from '~/actions/asyn/chat/restful'
import { changeDisplay } from '~/actions/asyn/chat/actions'

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
    setUserId: (id) => {
        dispatch({type: 'SET_USER_ID', data: {id: id}})
    },
    displayAddMember: (mesId) => {
        dispatch(changeDisplay('ADD_MEMBER', mesId, 'toggle'))
    },
    displaySettings: (mesId) => {
        dispatch(changeDisplay('SETTING', mesId, true))
    }
})

const ChatTopContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatTop)

export default ChatTopContainer
