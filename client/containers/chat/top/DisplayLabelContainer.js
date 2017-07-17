import { connect } from 'react-redux'
import DisplayLabel from '~/components/chat/top/DisplayLabel'

const mapStateToProps = (state, ownProps) => {
    const { chatListMap, currentChat } = state.inst.chat.left
    const { results, suggestions } = state.inst.chat.search
    return {
        chatListMap,
        results,
        suggestions
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeUser: (id) => {
        dispatch({type: 'SEARCH/REMOVE_MEMBER', data: {id}})
    }
})

const DisplayLabelContainer = connect(
    mapStateToProps, mapDispatchToProps
)(DisplayLabel)

export default DisplayLabelContainer
