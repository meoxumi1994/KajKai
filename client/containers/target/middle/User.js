import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Middle from '~/components/target/middle/User'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { avatarUrl, coverUrl, username } = state.inst.target.index
    return({
        avatarUrl: avatarUrl,
        coverUrl: coverUrl,
        username: username,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onUpdateCover: () => {

    },
    onUpdateAvatar: () => {

    }
})

const MiddleContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Middle)

export default MiddleContainer
