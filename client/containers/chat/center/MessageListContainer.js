import { connect } from 'react-redux'
import MessageList from '~/components/chat/center/MessageList'
import { getMessage } from '~/actions/asyn/chat'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      myInfo: state.user,
      partnerInfo: state.inst.chat.center.user,
      messages: state.inst.chat.center.messages,
      visibility: state.inst.chat.visibility.center.messageList,
      lazyLoad: state.inst.chat.center.lazyLoad
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  showMore: (chat) => {
    dispatch(getMessage(chat))
  }
})

const MessageListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(MessageList)

export default MessageListContainer
