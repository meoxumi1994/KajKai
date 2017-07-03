import { connect } from 'react-redux'
import NewChat from '~/components/chat/top/NewChat'
import { addMember } from '~/actions/asyn/chat/socket'
import { getMesId } from '~/actions/asyn/chat/restful'

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onNewChatSubmit: (mesId, id, conversatorId) => {
        dispatch(getMesId(id, conversatorId))
        dispatch({type: 'REMOVE_CHAT', data: {mesId}})
    }
})

const NewChatContainer = connect(
  mapStateToProps, mapDispatchToProps
)(NewChat)

export default NewChatContainer
