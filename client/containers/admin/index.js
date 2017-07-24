import { connect } from 'react-redux'
import Admin from '~/components/admin/'

const mapStateToProps = (state, ownProps) => {
    const { auth } = state.inst.admin
    return {
        auth
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const AdminContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Admin)

export default AdminContainer
