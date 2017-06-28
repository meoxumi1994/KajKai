import { connect } from 'react-redux'
import Head from '~/components/chat/left/Head'

const mapStateToProps = (state, ownProps) => {
  // console.log('---STATE ', state);
  return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    createNewChat: () => {
        dispatch({type: 'ADD_NEW_CHAT'})
    }
})

const HeadContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Head)

export default HeadContainer
