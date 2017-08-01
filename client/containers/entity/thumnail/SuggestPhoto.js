mport { connect } from 'react-redux'
import { get } from '~/config/allString'

import SuggestPhoto from '~/components/SuggestPhoto'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const SuggestPhotoContainer = connect(
    mapStateToProps, mapDispatchToProps
)(SuggestPhoto)

export default SuggestPhotoContainer
