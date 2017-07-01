import { connect } from 'react-redux'
import SendMessage from '~/components/chat/bottom/SendMessage'

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
      var mes = {
          type: 'server/SEND_MESSAGE',
          mesId,
          id,
          message: {
            text,
            url: '',
            type: 'message'
          },
          time: Date.now()
         }
     console.log('send message: ', mes);
      dispatch(mes)
  },
  uploadImage: () => {

  }
})

const SendMessageContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SendMessage)

export default SendMessageContainer
