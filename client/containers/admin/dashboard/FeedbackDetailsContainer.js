import { connect } from 'react-redux'
import FeedbackDetails from '~/components/admin/dashboard/FeedbackDetails'
import { getUsers, banUser } from '~/actions/asyn/admin/user/restful'

const mapStateToProps = (state, ownProps) => {
    const { display, mapp, details } = state.inst.admin.dashboard
    const { auth } = state.inst.admin
    return {
        display,
        mapp,
        auth,
        details,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {
        dispatch({ type: 'ADMIN/DASHBOARD/DISPLAY', subType: 'FEEDBACK_DETAILS', data: {display: false}})
    },
    changePermission: (type, id, status) => {
        dispatch({type: 'ADMIN/DASHBOARD/UPDATE_FEEDBACK_USER', subType: type, data: {id: id, status: status}})
    },
    save: (adminId, reason, feedbackId, feedbackStatus, reporterId, reporterStatus, defendantId, defendantStatus) => {
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
