import {connect} from 'react-redux'
import SendMessage from '~/components/chat/SendMessage'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      user: state.user
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const SendMessageContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SendMessage)

export default SendMessageContainer
