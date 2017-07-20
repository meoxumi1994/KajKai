import { connect } from 'react-redux'
import Dashboard from '~/components/admin/dashboard'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const DashboardContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Dashboard)

export default DashboardContainer
