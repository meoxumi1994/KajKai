import { connect } from 'react-redux'
import User from '~/components/admin/user'
import { getUsers, banUser } from '~/actions/asyn/admin/user/restful'

const mapStateToProps = (state, ownProps) => {
    const { keyy, mapp, display } = state.inst.admin.user
    const { id } = state.inst.admin.auth
    return {
        keyy,
        mapp,
        adminId: id,
        display
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getUsers: () => {
        dispatch(getUsers(0))
    },
    onUserDetails: (id) => {
        dispatch({type: 'ADMIN/USER/DISPLAY', subType: 'USER_DETAILS', data: { display: true, id }})
    },
    loadMore: (offset) => {
        dispatch(getUsers(offset))
    }
})

const UserContainer = connect(
  mapStateToProps, mapDispatchToProps
)(User)

export default UserContainer
