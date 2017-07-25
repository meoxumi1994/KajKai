import { connect } from 'react-redux'
import UserDetails from '~/components/admin/user/UserDetails'
import { getUsers, banUser } from '~/actions/asyn/admin/user/restful'

const mapStateToProps = (state, ownProps) => {
    const { mapp, current } = state.inst.admin.user
    const { auth } = state.inst.admin
    return {
        mapp,
        current,
        auth
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {
        dispatch({type: 'ADMIN/USER/DISPLAY', data: { display: false, id: '' }})
    },
    changePermission: (status, adminId, userId, reason) => {
        dispatch(banUser(status, adminId, userId, reason))
    }
})

const UserDetailsContainer = connect(
  mapStateToProps, mapDispatchToProps
)(UserDetails)

export default UserDetailsContainer
