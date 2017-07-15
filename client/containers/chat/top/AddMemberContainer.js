import { connect } from 'react-redux'
import AddMember from '~/components/chat/top/AddMember'
import { getMesId } from '~/actions/asyn/chat/restful'
import { addMember } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
  return {
      user: state.user,
      chatListMap: state.inst.chat.left.chatListMap
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addMember: (mesId, id, conversatorId) => {
        let type = ''
        if (mesId == 0) {
            if (conversatorId.indexOf(";") == -1) {
                type = 'new_chat'
            } else {
                type = 'new_group'
            }
        } else {
            type = 'add_member'
        }
        switch (type) {
            case 'new_chat':
                dispatch(getMesId(id, conversatorId))
                dispatch({type: 'REMOVE_CHAT', data: {mesId: null}})
                break;
            case 'new_group':
                const members = conversatorId.split(';')
                members.push(id)
                dispatch(addMember(null, id, members))
                dispatch({type: 'REMOVE_CHAT', data: {mesId: null}})
                break;
            case 'add_member':
                dispatch(addMember(mesId, id,  conversatorId.split(';')))
                break;
        }
        dispatch({type: 'USER_DISPLAY/ADD_MEMBER', data: {mesId, value: false}})
    }
})

const AddMemberContainer = connect(
  mapStateToProps, mapDispatchToProps
)(AddMember)

export default AddMemberContainer
