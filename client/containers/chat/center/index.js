import { connect } from 'react-redux'
import ChatCenter from '~/components/chat/center'
import { setCurrentChat } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
    const { messagesMap } = state.inst.chat.center
    return {
        messagesMap
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    setCurrentChat: (mesId) => {
        dispatch(setCurrentChat(mesId))
    },
})

const ChatCenterContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatCenter)

export default ChatCenterContainer
