import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Addphoto from '~/components/entity/thumnail/Addphoto'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        SUGGEST_PHOTO: g('SUGGEST_PHOTO'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    
})

const AddphotoContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Addphoto)

export default AddphotoContainer
