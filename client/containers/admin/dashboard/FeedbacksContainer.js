import { connect } from 'react-redux'
import Feedbacks from '~/components/admin/dashboard/Feedbacks'

const mapStateToProps = (state, ownProps) => {
    const { mapp } = state.inst.admin.dashboard
    return {
        mapp
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const FeedbacksContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Feedbacks)

export default FeedbacksContainer
