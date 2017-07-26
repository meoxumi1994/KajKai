import { connect } from 'react-redux'
import Feedbacks from '~/components/admin/dashboard/Feedbacks'
import { getFeedback } from '~/actions/asyn/admin/dashboard/restful'

const mapStateToProps = (state, ownProps) => {
    const { mapp } = state.inst.admin.dashboard
    return {
        mapp
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDetailsFeedback: (id) => {
        dispatch(getFeedback(id))
    },
})

const FeedbacksContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Feedbacks)

export default FeedbacksContainer
