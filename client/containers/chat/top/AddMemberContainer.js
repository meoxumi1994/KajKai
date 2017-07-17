import { connect } from 'react-redux'
import AddMember from '~/components/chat/top/AddMember'
import { getMesId, searchUser } from '~/actions/asyn/chat/restful'
import { addMember } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
    const { user } = state
    const { chatListMap } = state.inst.chat.left
    const { results, suggestions, display } = state.inst.chat.search
    return {
        user,
        chatListMap,
        results,
        suggestions,
        searchDisplay: display
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addMember: (mesId, id, conversatorId) => {
        console.log('add member');
        // let type = ''
        // if (mesId == 0) {
        //     if (conversatorId.indexOf(";") == -1) {
        //         type = 'new_chat'
        //     } else {
        //         type = 'new_group'
        //     }
        // } else {
        //     type = 'add_member'
        // }
        // switch (type) {
        //     case 'new_chat':
        //         dispatch(getMesId(id, conversatorId))
        //         dispatch({type: 'REMOVE_CHAT', data: {mesId: null}})
        //         break;
        //     case 'new_group':
        //         const members = conversatorId.split(';')
        //         members.push(id)
        //         dispatch(addMember(null, id, members))
        //         dispatch({type: 'REMOVE_CHAT', data: {mesId: null}})
        //         break;
        //     case 'add_member':
        //         dispatch(addMember(mesId, id,  conversatorId.split(';')))
        //         break;
        // }
        // dispatch({type: 'USER_DISPLAY/ADD_MEMBER', data: {mesId, value: false}})
    },
    userSearch: (keyword) => {
        dispatch({type: 'SEARCH/DISPLAY', data: {display: true}})
        dispatch(searchUser(keyword))
    },
    add: (user) => {
        dispatch({type: 'SEARCH/ADD_MEMBER', data: {user: user}})
        dispatch({type: 'SEARCH/DISPLAY', data: {display: false}})
    }
})

const AddMemberContainer = connect(
  mapStateToProps, mapDispatchToProps
)(AddMember)

export default AddMemberContainer
