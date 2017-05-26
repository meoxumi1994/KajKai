import { connect } from 'react-redux'
import RecentUserList from '~/components/chat/RecentUserList'
import { getChatList, addMessage, getMessage, getChatId, getTarget } from '~/actions/asyn/chat'

const mapStateToProps = (state, ownProps) => {
  console.log('state ',state);
  const { chatList } = state.inst.chat.left
  return (
    {
      chatList
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChat: (chat) => {
    dispatch(getMessage(chat));
  },
  loadchat: () => {
    console.log('loading chat');
    dispatch(getChatList());
  }
})

const RecentUserListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(RecentUserList)

export default RecentUserListContainer
