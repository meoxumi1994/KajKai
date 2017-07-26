import { connect } from 'react-redux'
import FeedbackDetails from '~/components/admin/dashboard/FeedbackDetails'
import { getUsers, banUser } from '~/actions/asyn/admin/user/restful'

const mapStateToProps = (state, ownProps) => {
    const { current, mapp, details } = state.inst.admin.dashboard
    const { auth } = state.inst.admin
    return {
        current,
        mapp,
        auth,
        details
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {
        dispatch({ type: 'ADMIN/DASHBOARD/CURRENT', data: {display: false}})
    },
    changePermission: (type, id, status) => {
        dispatch({type: 'ADMIN/DASHBOARD/UPDATE_FEEDBACK_USER', data: {id: id, status: status, type: type}})
    },
    save: (adminId, reason, feedbackId, feedbackStatus, reporterId, reporterStatus, defendantId, defendantStatus) => {
        // console.log(adminId, reason, feedbackId, feedbackStatus, reporterId, reporterStatus, defendantId, defendantStatus);
        dispatch(banUser(
          'feedback',
          adminId,
          reason,
          feedbackId,
          feedbackStatus,
          {
              id: reporterId,
              status: reporterStatus
          },
          {
              id: defendantId,
              status: defendantStatus
          }
        ))
        dispatch({type: 'ADMIN/DASHBOARD/CURRENT', data: {display: false, id: null}})
    }
})

const FeedbackDetailsContainer = connect(
  mapStateToProps, mapDispatchToProps
)(FeedbackDetails)

export default FeedbackDetailsContainer
