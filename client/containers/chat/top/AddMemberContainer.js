import { connect } from 'react-redux'
import AddMember from '~/components/chat/top/AddMember'
import { getMesId } from '~/actions/asyn/chat/restful'

const mapStateToProps = (state, ownProps) => {
  return {
      user: state.user,
      chatListMap: state.inst.chat.left.chatListMap
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addMember: (mesId, id, conversatorId, userList) => {
        dispatch({type: 'DISPLAY_ADD_MEMBER', data: {mesId, value: false}})
        if (mesId == 0) {
            if (conversatorId.indexOf(";") == -1) {
                dispatch(getMesId(id, conversatorId))
                dispatch({type: 'REMOVE_CHAT', data: {mesId: null}})
            } else {
                const members = conversatorId.split(';')
                members.push(id)
                dispatch({type: 'server/ADD_MEMBER', data: {
                    mesId: null,
                    members,
                    id,
                    time: Date.now()
                }})
                dispatch({type: 'REMOVE_CHAT', data: {mesId: null}})
            }
        } else {
            dispatch({type: 'server/ADD_MEMBER', data: {
                mesId,
                members: conversatorId.split(';'),
                id,
                time: Date.now()
            }})
        }
    }
})

const AddMemberContainer = connect(
  mapStateToProps, mapDispatchToProps
)(AddMember)

export default AddMemberContainer
