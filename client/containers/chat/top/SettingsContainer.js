import { connect } from 'react-redux'
import Settings from '~/components/chat/top/Settings'
import { changeDisplay } from '~/actions/asyn/chat/actions'

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
