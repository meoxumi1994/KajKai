import { connect } from 'react-redux'
import { get } from '~/config/allString'

import ImageText from '~/components/entity/row/ImageText'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        id: id,
        onChange: id,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeBasicInput: (value) => {
        console.log('onChangeBasicInput',value)
    }
})

const ImageTextContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ImageText)

export default ImageTextContainer
