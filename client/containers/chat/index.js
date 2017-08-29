import { connect } from 'react-redux'
import Chat from '~/components/chat'
import { getChatList } from '~/actions/asyn/chat/restful'

const mapStateToProps = (state, ownProps) => {
    const { center } = state.inst.chat
    return (
        {
          center,
          auth: state.auth
        }
    )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getChatList: () => {
        dispatch(getChatList(-1, 10))
    },
})

const ChatContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Chat)

export default ChatContainer
