import { connect } from 'react-redux'
import NewChat from '~/components/chat/top/NewChat'
import { addMember } from '~/actions/asyn/chat/socket'

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onNewChatSubmit: (mesId, id, conversatorId) => {
        dispatch({
            type: 'server/ADD_MEMBER',
            data: {
                mesId,
                id,
                members: [conversatorId],
                time: Date.now()
            }
        })
    }
})

const NewChatContainer = connect(
  mapStateToProps, mapDispatchToProps
)(NewChat)

export default NewChatContainer
