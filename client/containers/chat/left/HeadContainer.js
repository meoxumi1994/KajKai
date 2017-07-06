import { connect } from 'react-redux'
import Head from '~/components/chat/left/Head'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    createNewChat: () => {
        dispatch({type: 'ADD_CHAT', data: {mesId: 0, label: 'Tin nhắn mới'}})
        dispatch({type: 'SET_CURRENT_CHAT', data: {mesId: 0}})
    }
})

const HeadContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Head)

export default HeadContainer
