import { connect } from 'react-redux'
import ChatBottom from '~/components/chat/bottom'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      userId: state.user.id,
      mesId: ownProps.mesId
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendMessage: (mesId, id, text, url, type) => {
    dispatch({
        type: 'server/SEND_MESSAGE',
        data: {
          mesId, //'009595a873d53db3d0eefe711c0',
          id,
          message: {
            text,
            url: '',
            type: 'message'
          },
          time: Date.now()
        }
       })
  }
})

const ChatBottomContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatBottom)

export default ChatBottomContainer
