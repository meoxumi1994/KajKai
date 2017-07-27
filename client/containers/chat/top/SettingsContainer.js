import { connect } from 'react-redux'
import Settings from '~/components/chat/top/Settings'
import { changeDisplay } from '~/actions/asyn/chat/actions'
import { sendMessage } from '~/actions/asyn/chat/socket'

const mapStateToProps = (state, ownProps) => {
    const { chatListMap } = state.inst.chat.left
    return {
        chatListMap,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: (mesId) => {
        dispatch(changeDisplay('SETTING', mesId, false))
    },
    changeGroupName: (mesId, id, groupName) => {
        dispatch(changeDisplay('EDITING_LABEL', mesId, 'toggle'))
        dispatch({
            type: 'server/UPDATE_UI',
            data: {
                mesId,
                id,
                data: {
                    groupName
                }
            }
        })
        dispatch(sendMessage(mesId, id, groupName, '', 'notification'))
    },
    editing: (mesId) => {
        dispatch(changeDisplay('EDITING_LABEL', mesId, 'toggle'))
    }
})

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)

export default SettingsContainer
