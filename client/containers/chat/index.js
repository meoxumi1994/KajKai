import { connect } from 'react-redux'
import Chat from '~/components/chat'

const mapStateToProps = (state, ownProps) => {
    const { center } = state.inst.chat
    return (
        {
          center
        }
    )
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ChatContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Chat)

export default ChatContainer
