import { connect } from 'react-redux'
import Dashboard from '~/components/admin/dashboard'
import { getFeedbacks } from '~/actions/asyn/admin/dashboard/restful'

const mapStateToProps = (state, ownProps) => {
    const { keyy, mapp, display } = state.inst.admin.dashboard
    return {
        keyy,
        mapp,
        display
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getFeedbacks: () => {
        dispatch(getFeedbacks(0))
    },
    loadFeedback: (offset) => {
        dispatch(getFeedbacks(offset))
    }
})

const DashboardContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Dashboard)

export default DashboardContainer
