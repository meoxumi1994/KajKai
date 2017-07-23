import { connect } from 'react-redux'
import DisplayLabel from '~/components/chat/top/DisplayLabel'
import { search_removeMember } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
    const { chatListMap, currentChat } = state.inst.chat.left
    return {
        chatListMap,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeUser: (mesId, id) => {
        dispatch(search_removeMember(mesId, id))
    }
})

const DisplayLabelContainer = connect(
    mapStateToProps, mapDispatchToProps
)(DisplayLabel)

export default DisplayLabelContainer
