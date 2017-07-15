import { connect } from 'react-redux'
import Settings from '~/components/chat/top/Settings'
import { changeDisplay } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
    const { chatListMap } = state.inst.chat.left
    return {
        chatListMap,
        userId: state.user.id
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: (mesId) => {
        dispatch(changeDisplay('SETTING', mesId, false))
    },
    changeGroupName: () => {

    },
    removeUser: (mesId, id, memberId) => {
        dispatch({type: 'server/REMOVE_MEMBER', data: {
            mesId,
            id,
            memberId,
            time: Date.now()
        }})
    }
})

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)

export default SettingsContainer
