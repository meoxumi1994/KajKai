import { connect } from 'react-redux'
import Settings from '~/components/chat/top/Settings'

const mapStateToProps = (state, ownProps) => {
    const { settings } = state.inst.chat.display.visibility.top
    const { chatListMap } = state.inst.chat.left
    return {
        settings,
        chatListMap,
        userId: state.user.id
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    displaySettings: () => {
        dispatch({type: 'DISPLAY_SETTINGS', data: {display: false}})
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
