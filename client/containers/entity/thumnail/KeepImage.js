import { connect } from 'react-redux'
import { get } from '~/config/allString'

import KeepImage from '~/components/entity/thumnail/KeepImage'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        ADD_PHOTO: g('ADD_PHOTO'),
        SUGGEST_PHOTO: g('SUGGEST_PHOTO'),
        SEE_MORE: g('SEE_MORE'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const KeepImageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(KeepImage)

export default KeepImageContainer
