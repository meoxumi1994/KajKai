import { connect } from 'react-redux'
import { get } from '~/config/allString'

import MainPostRow from '~/components/entity/row/MainPostRow'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const mainpostrow = state.inst.entity.row.mainpostrow
    const data = mainpostrow[id] || mainpostrow.default
    return({
        id: id,
        data: data,
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onCreate: (data) => {
        dispatch({ type: 'ENTITY_INPUT_BASICINPUT_CREATE', id: data.id, textare: data.content})
    }
})

const MainPostRowContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MainPostRow)

export default MainPostRowContainer
