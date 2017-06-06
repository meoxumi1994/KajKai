import { connect } from 'react-redux'
import EmoNav from '~/components/chat/bottom/IconPopOver/EmoNav'
import { sendMessage } from '~/actions/asyn/chat'
import iconUtility from '~/config/iconUtility'
import { waitingChat } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
    return ({
      mesId: state.inst.chat.center.mesId,
      id: state.user.id
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    sendEmo: (mesId, id, emo) => {
      console.log(emo);
      dispatch(sendMessage(mesId, emo))
      dispatch(waitingChat(mesId, id, emo))
    },
    loadIcon: () => {
      iconUtility.getIconList()
    }
})

const EmoNavContainer = connect(
    mapStateToProps, mapDispatchToProps
)(EmoNav)

export default EmoNavContainer
