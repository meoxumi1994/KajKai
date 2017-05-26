import { connect } from 'react-redux'
import { get } from '~/config/allString'

import TextImage from '~/components/entity/row/TextImage'

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

const TextImageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(TextImage)

export default TextImageContainer
