import { connect } from 'react-redux'
import Feedbacks from '~/components/admin/dashboard/Feedbacks'

const mapStateToProps = (state, ownProps) => {
    // console.log('--- STATE', state.inst.admin);
    const { mapp } = state.inst.admin.dashboard
    return {
        mapp
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDetailsFeedback: (id) => {
        dispatch({type: 'ADMIN/DASHBOARD/CURRENT', data: {display: true, id: id}})
    }
})

const FeedbacksContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Feedbacks)

export default FeedbacksContainer
