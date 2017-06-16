import { connect } from 'react-redux'
import MessageList from '~/components/chat/center/MessageList'
import { getMessage } from '~/actions/asyn/chat'

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  showMore: (chat) => {
    // dispatch(getMessage(chat))
  }
})

const MessageListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(MessageList)

export default MessageListContainer
