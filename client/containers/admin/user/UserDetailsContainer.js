import { connect } from 'react-redux'
import UserDetails from '~/components/admin/user/UserDetails'
import { getUsers, banUser } from '~/actions/asyn/admin/user/restful'

const mapStateToProps = (state, ownProps) => {
    const { mapp, current } = state.inst.admin.user
    return {
        mapp,
        current
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {
        dispatch({type: 'ADMIN/USER/DISPLAY', data: { display: false, id: '' }})
    },
    deactiveUser: (status, adminId, userId, reason) => {
        dispatch(banUser(status, adminId, userId, reason))
    }
})

const UserDetailsContainer = connect(
  mapStateToProps, mapDispatchToProps
)(UserDetails)

export default UserDetailsContainer
