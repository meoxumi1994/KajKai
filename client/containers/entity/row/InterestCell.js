import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { removeInterest } from '~/actions/asyn/interest'
import InterestCell from '~/components/entity/row/InterestCell'

const mapStateToProps = (state, {id}) => {
    const g = (lang) => get(state.user.language, lang)
    const interestcell = state.inst.entity.row.interestcell[id]
    return({
        ...interestcell
    })
}

const mapDispatchToProps = (dispatch, {id}) => ({
    onRemove: () => {
        dispatch(removeInterest(id))
    }
})

const InterestCellContainer = connect(
    mapStateToProps, mapDispatchToProps
)(InterestCell)

export default InterestCellContainer
