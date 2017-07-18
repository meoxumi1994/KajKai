import { connect } from 'react-redux'
import User from '~/components/admin/User'
import { getUsers } from '~/actions/asyn/admin/user/restful'

const mapStateToProps = (state, ownProps) => {
    const { keyy, mapp } = state.inst.admin.user

    return {
        keyy,
        mapp
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getUsers: () => {
        dispatch(getUsers())
    }
})

const UserContainer = connect(
  mapStateToProps, mapDispatchToProps
)(User)

export default UserContainer
