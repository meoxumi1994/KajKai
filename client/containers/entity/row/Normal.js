import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Normal from '~/components/entity/row/Normal'

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

const NormalContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Normal)

export default NormalContainer
