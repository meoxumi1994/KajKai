import { connect } from 'react-redux'

import { } from '../../actions/asyn/profile'
import Profile from '../../components/profile'

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const ProfileContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Profile)

export default ProfileContainer
