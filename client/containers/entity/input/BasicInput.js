import { connect } from 'react-redux'
import { get } from '~/config/allString'

import BasicInput from '~/components/entity/input/BasicInput'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { textare, opensupplement } = state.inst.entity.input.basicinput
    return({
        textare: textare,
        opensupplement: opensupplement,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleChange: (type, e) => {
        dispatch({ type: 'ENTITY_INPUT_BASICINPUT_HANDLE_CHANGE', [type]: e.target.value })
    },
    onFocus: () => {
        dispatch({ type: 'ENTITY_INPUT_BASICINPUT_OPEN_SUPPLEMENT'})
    },
    onBlur: () => {
        dispatch({ type: 'ENTITY_INPUT_BASICINPUT_CLOSE_SUPPLEMENT'})
    },
    onBold: () => {
        console.log('onBold')
    },
    onItalic: () => {
        console.log('onItalic')
    }
})

const BasicInputContainer = connect(
    mapStateToProps, mapDispatchToProps
)(BasicInput)

export default BasicInputContainer
