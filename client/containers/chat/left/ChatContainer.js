import { connect } from 'react-redux'
import Chat from '~/components/chat/left/Chat'

const mapStateToProps = (state, ownProps) => {
    console.log('---STATE ', state.inst.chat);
    return {
      user: state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ChatContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Chat)

export default ChatContainer
