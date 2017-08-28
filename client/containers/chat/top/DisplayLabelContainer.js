import { connect } from 'react-redux'
import DisplayLabel from '~/components/chat/top/DisplayLabel'
import { search_removeMember } from '~/actions/asyn/chat/actions'
import { get } from '~/config/allString'

const mapStateToProps = (state, ownProps) => {
    const { chatListMap, currentChat } = state.inst.chat.left
    const g = (lang) => get(state.user.language, lang)
    return {
        chatListMap,
        NEW_MESSAGE: g('NEW_MESSAGE'),
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
