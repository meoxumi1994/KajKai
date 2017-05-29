import { connect } from 'react-redux'
import MessageList from '~/components/chat/center/MessageList'
import { getMessage } from '~/actions/asyn/chat'

const mapStateToProps = (state, ownProps) => {
  // console.log('state ',state);
  return (
    {
      myInfo: state.user,
      partnerInfo: state.inst.chat.center.user,
      messages: state.inst.chat.center.messages,
      visibility: state.inst.chat.visibility.messageList,
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
