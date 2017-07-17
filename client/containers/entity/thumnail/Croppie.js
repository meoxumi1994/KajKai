import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { loadImage } from '~/actions/asyn/entity/loadImage'
import Croppie from '~/components/entity/thumnail/Croppie'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        CROPPIE_DESCRIPTION: g('CROPPIE_DESCRIPTION'),
        SAVE: g('SAVE'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoadImage: (action, src) => {
        dispatch(loadImage(action, undefined, src))
    }
})

const CroppieContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Croppie)

export default CroppieContainer
