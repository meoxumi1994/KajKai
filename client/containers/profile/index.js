import { connect } from 'react-redux'

import Profile from '~/components/profile'

const mapStateToProps = (state, ownProps) => ({
    isloading: (state.auth == 'WHO_ING'),
    username: state.user.username,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const ProfileContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Profile)

export default ProfileContainer
