import { connect } from 'react-redux'
import { findName } from '../support'
import { joinChat } from '~/actions/asyn/chat'

import NewChat from '~/components/chat/NewChat'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      state
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
