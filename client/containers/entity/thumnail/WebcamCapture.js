import { connect } from 'react-redux'
import { get } from '~/config/allString'

import WebcamCapture from '~/components/entity/thumnail/WebcamCapture'
import { loadImage } from '~/actions/asyn/entity/loadImage'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        TAKE_PHOTO: g('TAKE_PHOTO'),
        WEBCAM_DESCRIPTION: g('WEBCAM_DESCRIPTION'),
        CAPTURE_PHOTO: g('CAPTURE_PHOTO'),
        RETAKE_PHOTO: g('RETAKE_PHOTO'),
        SAVE: g('SAVE'),
        CROPPIE_TITLE: g('CROPPIE_TITLE'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoadImage: (action, src) => {
        dispatch(loadImage(action, undefined, src))
    }
})

const WebcamCaptureContainer = connect(
    mapStateToProps, mapDispatchToProps
)(WebcamCapture)

export default WebcamCaptureContainer
