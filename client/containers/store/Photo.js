import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Photo from '~/components/store/Photo'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const PhotoContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Photo)

export default PhotoContainer
