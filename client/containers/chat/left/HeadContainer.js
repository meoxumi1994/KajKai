import { connect } from 'react-redux'
import Head from '~/components/chat/left/Head'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    createNewChat: () => {
        dispatch({type: 'NEW_CHAT', data: {mesId: 0, label: 'Tin nhắn mới'}})
        dispatch({type: 'USER_DISPLAY/ADD_MEMBER', data: {mesId: 0, value: true}})
    }
})

const HeadContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Head)

export default HeadContainer
