import { connect } from 'react-redux'
import { get } from '~/config/allString'

import InterestCell from '~/components/entity/row/InterestCell'

const mapStateToProps = (state, {id}) => {
    const g = (lang) => get(state.user.language, lang)
    const interestcell = state.inst.entity.row.interestcell[id]
    return({
        ...interestcell
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const InterestCellContainer = connect(
    mapStateToProps, mapDispatchToProps
)(InterestCell)

export default InterestCellContainer
