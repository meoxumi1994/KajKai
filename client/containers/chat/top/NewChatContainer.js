import { connect } from 'react-redux'
import { joinChat } from '~/actions/asyn/chat'

import NewChat from '~/components/chat/top/NewChat'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      visibility: state.inst.chat.visibility.newChat
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onNewChatSubmit: (chat) => {
        dispatch(joinChat(chat));
    }
})

const NewChatContainer = connect(
  mapStateToProps, mapDispatchToProps
)(NewChat)

export default NewChatContainer
