import { connect } from 'react-redux'
import ChatTop from '~/components/chat/top'
import { getMessages } from '~/actions/asyn/chat/restful'
import { changeDisplay } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
    const { chatListMap, currentChat } = state.inst.chat.left
    return {
        chatListMap,
        currentChat,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: (mesId) => {
        if (mesId == 0) {
            dispatch({type: 'REMOVE_CHAT', data: {mesId}})
        } else {
            dispatch({type: 'CLOSE_CHAT', data: {mesId}})
        }
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
