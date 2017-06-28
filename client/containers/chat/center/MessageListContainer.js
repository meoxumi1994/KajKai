import { connect } from 'react-redux'
import MessageList from '~/components/chat/center/MessageList'

const mapStateToProps = (state, ownProps) => {
    const { user } = state
    return {
        user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const MessageListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(MessageList)

export default MessageListContainer
