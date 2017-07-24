import { connect } from 'react-redux'
import User from '~/components/admin/user'
import { getUsers, banUser } from '~/actions/asyn/admin/user/restful'

const mapStateToProps = (state, ownProps) => {
    const { keyy, mapp } = state.inst.admin.user
    const { id } = state.inst.admin.auth
    // console.log('state', state.inst.admin);
    return {
        keyy,
        mapp,
        adminId: id
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getUsers: () => {
        dispatch(getUsers())
    },
    onUserDetails: (id) => {
        dispatch({type: 'ADMIN/USER/DISPLAY', data: { display: true, id }})
    }
})

const UserContainer = connect(
  mapStateToProps, mapDispatchToProps
)(User)

export default UserContainer
