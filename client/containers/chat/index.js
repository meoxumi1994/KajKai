import { connect } from 'react-redux'
import Chat from '~/components/chat'
import { findName } from '../support'

const mapStateToProps = (state, ownProps) => {
<<<<<<< HEAD

=======
  return state
>>>>>>> a67ddc208c5c731b79ae2d975ad7b0a3c4febfff
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ChatContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Chat)

export default ChatContainer
