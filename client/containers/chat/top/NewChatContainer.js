import { connect } from 'react-redux'
import { joinChat } from '~/actions/asyn/chat'
import { updateMessageListVisibility, updateCreateChatVisibility } from '~/actions/asyn/chat/actions'
import NewChat from '~/components/chat/top/NewChat'

const mapStateToProps = (state, ownProps) => {
  // console.log('state ',state);
  return (
    {
      visibility: state.inst.chat.visibility.top.newChat
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onNewChatSubmit: (chat) => {
        dispatch(joinChat(chat))
        dispatch(updateMessageListVisibility(true))
        dispatch(updateCreateChatVisibility(false))
    }
})

const NewChatContainer = connect(
  mapStateToProps, mapDispatchToProps
)(NewChat)

export default NewChatContainer
