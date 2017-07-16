import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Addphoto from '~/components/entity/thumnail/Addphoto'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        ...state.inst.entity.thumnail.addphoto,
        SUGGEST_PHOTO: g('SUGGEST_PHOTO'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (key, value) => {
        dispatch({ type: 'INST_ENTITY_THUMNAIL_ADDPHOTO_CHANGE', key: key, value: value })
    }
})

const AddphotoContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Addphoto)

export default AddphotoContainer
