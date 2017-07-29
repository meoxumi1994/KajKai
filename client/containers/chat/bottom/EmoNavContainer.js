import { connect } from 'react-redux'
import EmoNav from '~/components/chat/bottom/EmoNav'
import iconUtility from '~/config/iconUtility'
import { sendMessage } from '~/actions/asyn/chat/socket'

const mapStateToProps = (state, ownProps) => {
    return ({
        user: state.user,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    sendEmo: (mesId, id, emo) => {
        dispatch(sendMessage(mesId, id, emo, '', 'icon'))
    },
    loadIcon: () => {
      // iconUtility.getIconList()
    }
})

const EmoNavContainer = connect(
    mapStateToProps, mapDispatchToProps
)(EmoNav)

export default EmoNavContainer
