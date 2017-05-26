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
    dispatch(getChatList());
    // dispatch(addMessage(user[0].chatId, user[2].id, "heyyy"))
  }
})

var user = [
  {
    name: 'Minh',
    id: '591d7c7cb79aa862cc15d21b',
    chatId: '591d7c7cb79aa862cc15d21b$591d844fb79aa862cc15d21c'
  },
  {
    name: 'Long Long',
    id: '5923f11c29dd9977674d1af0',
    chatId: '591d844fb79aa862cc15d21c$5923f11c29dd9977674d1af0'
  },
  {
    name: 'Long Ly',
    id: '591d844fb79aa862cc15d21c'
  },
]

const RecentUserListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(RecentUserList)

export default RecentUserListContainer
