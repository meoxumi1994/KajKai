import { connect } from 'react-redux'
import AddMember from '~/components/chat/top/AddMember'
import { getMesId, searchUser } from '~/actions/asyn/chat/restful'
import { changeDisplay, removeChat, search_addMember, search_resetResult } from '~/actions/asyn/chat/actions'
import { addMember } from '~/actions/asyn/chat/socket'

const mapStateToProps = (state, ownProps) => {
    const { user } = state
    const { chatListMap } = state.inst.chat.left
    return {
        user,
        chatListMap,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addMember: (mesId, id, conversatorIds) => {
        let type = ''
        if (mesId == 0) {
            if (conversatorIds.length == 1) {
                type = 'new_chat'
            } else {
                type = 'new_group'
            }
        } else {
            type = 'add_member'
        }
        console.log('type ',type);
        switch (type) {
            case 'new_chat':
                dispatch(getMesId(id, conversatorIds[0]))
                dispatch(removeChat(null))
                break;
            case 'new_group':
                conversatorIds.push(id)
                dispatch(addMember(null, id, conversatorIds))
                dispatch(removeChat(null))
                break;
            case 'add_member':
                dispatch(addMember(mesId, id, conversatorIds))
                break;
        }
        dispatch(changeDisplay('ADD_MEMBER', mesId, false))
        // dispatch(search_resetResult())
    },
    userSearch: (mesId, keyword) => {
        dispatch(changeDisplay('SEARCH', mesId, true))
        dispatch(searchUser(mesId, keyword))
    },
    searchAdd: (mesId, user) => {
        dispatch(search_addMember(mesId, user))
        dispatch(changeDisplay('SEARCH', mesId, false))
    }
})

const AddMemberContainer = connect(
  mapStateToProps, mapDispatchToProps
)(AddMember)

export default AddMemberContainer
