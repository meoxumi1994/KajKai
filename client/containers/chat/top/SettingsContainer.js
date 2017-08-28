import { connect } from 'react-redux'
import Settings from '~/components/chat/top/Settings'
import { changeDisplay } from '~/actions/asyn/chat/actions'
import { sendMessage } from '~/actions/asyn/chat/socket'
import { get } from '~/config/allString'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { chatListMap } = state.inst.chat.left
    return {
        chatListMap,
        user: state.user,
        CHAT_SETTING: g('CHAT_SETTING'),
        CHAT_LABEL: g('CHAT_LABEL'),
        MEMBERS: g('MEMBERS'),
        CANCEL: g('CANCEL'),
        EDIT: g('EDIT'),
        DONE: g('DONE'),
        SAVE: g('SAVE'),
        DEFAULT: g('DEFAULT'),
        VIEW: g('VIEW'),
        CLOSE: g('CLOSE'),
        NONE: g('NONE'),
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
        // dispatch(sendMessage(mesId, id, groupName, '', 'notification'))
    },
    editing: (mesId) => {
        dispatch(changeDisplay('EDITING_LABEL', mesId, 'toggle'))
    },
})

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)

export default SettingsContainer
