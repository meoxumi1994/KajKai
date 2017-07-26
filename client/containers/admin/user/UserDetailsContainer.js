import { connect } from 'react-redux'
import UserDetails from '~/components/admin/user/UserDetails'
import { getUsers, banUser } from '~/actions/asyn/admin/user/restful'

const mapStateToProps = (state, ownProps) => {
    const { mapp, current } = state.inst.admin.user
    const { auth } = state.inst.admin
    // console.log('state', state.inst.admin);
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
