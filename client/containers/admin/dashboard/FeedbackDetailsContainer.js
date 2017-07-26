import { connect } from 'react-redux'
import FeedbackDetails from '~/components/admin/dashboard/FeedbackDetails'
import { getUsers, banUser } from '~/actions/asyn/admin/user/restful'

const mapStateToProps = (state, ownProps) => {
    const { current } = state.inst.admin.dashboard
    const { mapp } = state.inst.admin.dashboard
    const { auth } = state.inst.admin
    return {
        current,
        mapp,
        auth
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {
        dispatch({ type: 'ADMIN/DASHBOARD/CURRENT', data: {display: false} })
    },
    changePermission: (type, id, status) => {
        dispatch({type: 'ADMIN/DASHBOARD/UPDATE_FEEDBACK_USER', data: {id: id, status: status, type: type}})
    },
    save: (reporter, defendant, adminId, reason) => {
        dispatch(banUser(reporter.status, adminId, reporter.id, reason))
        dispatch(banUser(defendant.status, adminId, defendant.id, reason))
    }
})

const FeedbackDetailsContainer = connect(
  mapStateToProps, mapDispatchToProps
)(FeedbackDetails)

export default FeedbackDetailsContainer
