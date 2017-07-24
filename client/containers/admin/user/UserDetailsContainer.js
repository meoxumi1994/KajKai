import { connect } from 'react-redux'
import UserDetails from '~/components/admin/user/UserDetails'

const mapStateToProps = (state, ownProps) => {
    const { mapp, current } = state.inst.admin.user
    return {
        mapp,
        current
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {

    }
})

const UserDetailsContainer = connect(
  mapStateToProps, mapDispatchToProps
)(UserDetails)

export default UserDetailsContainer
