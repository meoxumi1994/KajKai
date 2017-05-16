import { connect } from 'react-redux'

import Profile from '~/components/profile'

const mapStateToProps = (state, ownProps) => ({
    iswhoing: (state.auth == 'WHO_ING' || state.auth == 'WAIT'),
    isusername: state.user.username,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const ProfileContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Profile)

export default ProfileContainer
