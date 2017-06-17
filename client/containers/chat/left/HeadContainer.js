import { connect } from 'react-redux'
import Head from '~/components/chat/left/Head'

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  createNewChat: () => {
      // dispatch(updateMessageListVisibility(true))
      // dispatch(updateCreateChatVisibility(true))
  }
})

const HeadContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Head)

export default HeadContainer
