import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { loadImage } from '~/actions/asyn/entity/loadImage'

import UploadCroppie from '~/components/entity/thumnail/UploadCroppie'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        CROPPIE_TITLE: g('CROPPIE_TITLE'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoadImage: (action, file) => {
        dispatch(loadImage(action, file, undefined))
    }
})

const UploadCroppieContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UploadCroppie)

export default UploadCroppieContainer
