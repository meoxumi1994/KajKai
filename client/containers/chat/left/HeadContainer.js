import { connect } from 'react-redux'
import Head from '~/components/chat/left/Head'

const mapStateToProps = (state, ownProps) => {
  // console.log('---STATE ', state);
  return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    createNewChat: () => {
        dispatch({type: 'NEW_CHAT', data: {mesId: 0, label: 'Tin nhắn mới'}})
        dispatch({type: 'SET_CURRENT_CHAT', data: {mesId: 0}})
    }
})

const HeadContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Head)

export default HeadContainer
