import { connect } from 'react-redux'
import { get } from '~/config/allString'

import OneImage from '~/components/entity/thumnail/OneImage'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        ADD_PHOTO: g('ADD_PHOTO')
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const OneImageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(OneImage)

export default OneImageContainer
