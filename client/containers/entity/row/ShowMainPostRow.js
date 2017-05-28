import { connect } from 'react-redux'
import { get } from '~/config/allString'

import ShowMainPostRow from '~/components/entity/row/ShowMainPostRow'

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

})

const ShowMainPostRowContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ShowMainPostRow)

export default ShowMainPostRowContainer
