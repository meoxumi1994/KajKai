import { connect } from 'react-redux'
import { get } from '~/config/allString'

import TextImage from '~/components/entity/row/TextImage'

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

const TextImageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(TextImage)

export default TextImageContainer
