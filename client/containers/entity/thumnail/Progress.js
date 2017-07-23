import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Progress from '~/components/entity/thumnail/Progress'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const progress = state.inst.entity.thumnail.progress
    return({
        ...progress
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    downRatio : () => {
        dispatch({ type: 'PROGRESS_UP' })
    }
})

const ProgressContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Progress)

export default ProgressContainer
