import { connect } from 'react-redux'
import Dashboard from '~/components/admin/dashboard'
import { getFeedbacks } from '~/actions/asyn/admin/dashboard/restful'

const mapStateToProps = (state, ownProps) => {
    const { keyy, mapp } = state.inst.admin.dashboard
    return {
        keyy,
        mapp
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getNewFeed: () => {
        dispatch(getFeedbacks(Date.now(), 10))
    }
})

const DashboardContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Dashboard)

export default DashboardContainer
