import { connect } from 'react-redux'
import { get } from '~/config/allString'

import ImageText from '~/components/entity/row/ImageText'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        id: id,
    })
}

const mapDispatchToProps = (dispatch, { id, onChange }) => ({
    onChangeBasicInput: (value) => {
        onChange({text: value, id})
    }
})

const ImageTextContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ImageText)

export default ImageTextContainer
