import { connect } from 'react-redux'
import UserDetails from '~/components/admin/user/UserDetails'
import { getUsers, banUser } from '~/actions/asyn/admin/user/restful'

const mapStateToProps = (state, ownProps) => {
    const { mapp, display, current } = state.inst.admin.user
    const { auth } = state.inst.admin
    return {
        mapp,
        display,
        auth,
        current
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {
        dispatch({type: 'ADMIN/USER/DISPLAY', subType: 'USER_DETAILS', data: { display: false, id: '' }})
    },
    changePermission: (adminId, reason, userId, userStatus) => {
        dispatch(banUser(
          'user',
          adminId,
          reason,
          null,
          null,
          null,
          {
            id: userId,
            status: userStatus
          }
        ))
    }
})

const UserDetailsContainer = connect(
  mapStateToProps, mapDispatchToProps
)(UserDetails)

export default UserDetailsContainer
