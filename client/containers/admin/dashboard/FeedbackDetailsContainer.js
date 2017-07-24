import { connect } from 'react-redux'
import FeedbackDetails from '~/components/admin/dashboard/FeedbackDetails'

const mapStateToProps = (state, ownProps) => {
    const { current } = state.inst.admin.dashboard
    const { mapp } = state.inst.admin.dashboard
    return {
        current,
        mapp
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {
        dispatch({ type: 'ADMIN/DASHBOARD/CURRENT', data: {display: false} })
    }
})

const FeedbackDetailsContainer = connect(
  mapStateToProps, mapDispatchToProps
)(FeedbackDetails)

export default FeedbackDetailsContainer
