import { connect } from 'react-redux'
import EmoNav from '~/components/chat/bottom/IconPopOver/EmoNav'
import { sendMessage } from '~/actions/asyn/chat'
import iconUtility from '~/config/iconUtility'

const mapStateToProps = (state, ownProps) => {
    return ({
      mesId: state.inst.chat.center.mesId,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    sendEmo: (emo, mesId) => {
      dispatch(sendMessage({mesId: mesId, text: emo}))
    },
    loadIcon: () => {
      iconUtility.getIconList()
    }
})

const EmoNavContainer = connect(
    mapStateToProps, mapDispatchToProps
)(EmoNav)

export default EmoNavContainer
