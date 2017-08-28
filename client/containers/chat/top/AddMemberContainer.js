import { connect } from 'react-redux'
import AddMember from '~/components/chat/top/AddMember'
import { getMesId, searchUser } from '~/actions/asyn/chat/restful'
import { changeDisplay, removeChat, search_addMember, search_resetResult } from '~/actions/asyn/chat/actions'
import { addMember } from '~/actions/asyn/chat/socket'
import { get } from '~/config/allString'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { user } = state
    const { chatListMap } = state.inst.chat.left
    return {
        user,
        chatListMap,
        ADD_MEMBER: g('ADD_MEMBER'),
        DONE: g('DONE'),
        CANCEL: g('CANCEL'),
        NO_DATA: g('NO_DATA'),

    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addMember: (mesId, id, members, usersKey) => {
        let type = ''
        let groupMembers = []
        if (mesId == 0) {
            if (members.length == 1) {
                type = 'new_chat'
            } else {
                type = 'new_group'
            }
        } else {
            type = 'add_member'
        }

        switch (type) {
            case 'new_chat':
                dispatch(getMesId(id, members[0]))
                dispatch(removeChat(null))
                break;
            case 'new_group':
            case 'add_member':
                groupMembers.push(...members)
                groupMembers.push(...usersKey)
                groupMembers.push(id)
                dispatch(addMember(null, id, groupMembers))
                if (type == 'new_group') {
                    dispatch(removeChat(null))
                } else {
                    dispatch({type: 'SEARCH', subType: 'RESET_RESULTS', data: {mesId}})
                }
                break;
        }
        dispatch(changeDisplay('ADD_MEMBER', mesId, false))
    },
    searchUser: (mesId, keyword) => {
        dispatch(searchUser(mesId, keyword))
    },
    addSearchedMember: (mesId, user, usersKey) => {
        if (usersKey.indexOf(user.id) == -1) {
            dispatch(search_addMember(mesId, user))
        }
        dispatch(changeDisplay('SEARCH', mesId, false))
    },
    hideSearch: (mesId, value) => {
        if (value == '' || value == undefined) {
            dispatch(changeDisplay('SEARCH', mesId, false))
        }
    },
    hideAddMember: (mesId) => {
        dispatch(changeDisplay('ADD_MEMBER', mesId, false))
    }
})

const AddMemberContainer = connect(
  mapStateToProps, mapDispatchToProps
)(AddMember)

export default AddMemberContainer
