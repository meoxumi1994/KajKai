import { connect } from 'react-redux'
import { getChatId, getMessage } from '~/actions/asyn/chat'
import { updateMessageListVisibility, updateCreateChatVisibility } from '~/actions/asyn/chat/actions'
import NewChat from '~/components/chat/top/NewChat'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      visibility: state.inst.chat.visibility.top.newChat
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onNewChatSubmit: (id) => {
        dispatch(getChatId(id))
        // dispatch(updateMessageListVisibility(true))
        // dispatch(updateCreateChatVisibility(false))
    }
})

const NewChatContainer = connect(
  mapStateToProps, mapDispatchToProps
)(NewChat)

export default NewChatContainer
