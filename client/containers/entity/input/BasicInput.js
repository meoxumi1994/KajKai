import { connect } from 'react-redux'
import { get } from '~/config/allString'

import BasicInput from '~/components/entity/input/BasicInput'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const basicinput = state.inst.entity.input.basicinput
    const { textare, opensupplement, focus } = basicinput[id] || basicinput.default
    return({
        focus: focus,
        textare: textare,
        opensupplement: opensupplement,
        id: id,
    })
}

const mapDispatchToProps = (dispatch, { id, onChange }) => ({
    handleChange: (type, e) => {
        onChange(e.target.value)
        dispatch({ type: 'ENTITY_INPUT_BASICINPUT_HANDLE_CHANGE', [type]: e.target.value, id })
    },
    onFocus: () => {
        // console.log('ENTITY_INPUT_BASICINPUT_OPEN_SUPPLEMENT', id)
        dispatch({ type: 'ENTITY_INPUT_BASICINPUT_OPEN_SUPPLEMENT', id})
    },
    onBlur: () => {
        // console.log('ENTITY_INPUT_BASICINPUT_CLOSE_SUPPLEMENT', id)
        dispatch({ type: 'ENTITY_INPUT_BASICINPUT_CLOSE_SUPPLEMENT', id})
    },
    onBold: (textInput) => {
        console.log('onBold')
        // textInput.focus()
    },
    onItalic: (textInput) => {
        console.log('onItalic')
        // textInput.focus()
    },
    onSave: () => {
        dispatch({ type: 'ENTITY_INPUT_BASICINPUT_CLOSE_SUPPLEMENT', id})
    },
})

const BasicInputContainer = connect(
    mapStateToProps, mapDispatchToProps
)(BasicInput)

export default BasicInputContainer
