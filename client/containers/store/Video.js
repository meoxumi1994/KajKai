import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Video from '~/components/store/Video'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const VideoContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Video)

export default VideoContainer
