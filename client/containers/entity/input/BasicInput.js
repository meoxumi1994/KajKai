import { connect } from 'react-redux'
import { get } from '~/config/allString'

import BasicInput from '~/components/entity/input/BasicInput'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { textare, opensupplement, focus} = state.inst.entity.input.basicinput
    return({
        focus: focus,
        textare: textare,
        opensupplement: opensupplement,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleChange: (type, e) => {
        ownProps.onChange(e.target.value)
        dispatch({ type: 'ENTITY_INPUT_BASICINPUT_HANDLE_CHANGE', [type]: e.target.value })
    },
    onFocus: (textInput) => {
        textInput.focus()
        dispatch({ type: 'ENTITY_INPUT_BASICINPUT_OPEN_SUPPLEMENT'})
    },
    onBlur: (textInput) => {
        dispatch({ type: 'ENTITY_INPUT_BASICINPUT_CLOSE_SUPPLEMENT'})
    },
    onBold: (textInput) => {
        textInput.focus()
    },
    onItalic: (textInput) => {
        textInput.focus()
    },
    onSave: () => {
        dispatch({ type: 'ENTITY_INPUT_BASICINPUT_CLOSE_SUPPLEMENT'})
    },
})

const BasicInputContainer = connect(
    mapStateToProps, mapDispatchToProps
)(BasicInput)

export default BasicInputContainer
