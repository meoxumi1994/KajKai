import { connect } from 'react-redux'
import EmoNav from '~/components/chat/bottom/EmoNav'
// import { sendMessage } from '~/actions/asyn/chat'
import iconUtility from '~/config/iconUtility'

const mapStateToProps = (state, ownProps) => {
    return ({
      mesId: state.inst.chat.center.mesId,
      user: state.user
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    sendEmo: (mesId, user, emo) => {
      // dispatch(sendMessage(mesId, user, emo))
    },
    loadIcon: () => {
      // iconUtility.getIconList()
    }
})

const EmoNavContainer = connect(
    mapStateToProps, mapDispatchToProps
)(EmoNav)

export default EmoNavContainer
