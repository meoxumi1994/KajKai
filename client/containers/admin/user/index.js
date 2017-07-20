import { connect } from 'react-redux'
import User from '~/components/admin/user'
import { getUsers, getUser } from '~/actions/asyn/admin/user/restful'

const mapStateToProps = (state, ownProps) => {
    const { keyy, mapp } = state.inst.admin.user

    return {
        keyy,
        mapp
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getUsers: () => {
        // console.log('get user');
        dispatch(getUsers())
    },
    onDetails: (id) => {
        dispatch(getUser(id))
    }
})

const UserContainer = connect(
  mapStateToProps, mapDispatchToProps
)(User)

export default UserContainer
