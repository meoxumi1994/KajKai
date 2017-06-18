import { connect } from 'react-redux'

import User from '~/components/user'
import { getUser } from '~/actions/asyn/user'

const mapStateToProps = (state, ownProps ) => {
    return({
        iswhoing: (state.auth == 'WHO_ING' || state.auth == 'WAIT'),
        isusername: state.user.username,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetUser: () => {
        dispatch(getUser(ownProps.location.pathname.split('/')[2]))
    }
})

const UserContainer = connect(
    mapStateToProps, mapDispatchToProps
)(User)

export default UserContainer
