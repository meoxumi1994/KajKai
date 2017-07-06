import { connect } from 'react-redux'
import AddMember from '~/components/chat/top/AddMember'
import { getMesId } from '~/actions/asyn/chat/restful'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addMember: (mesId, id, conversatorId) => {
        dispatch(getMesId(id, conversatorId))
        dispatch({type: 'REMOVE_CHAT', data: {mesId}})
    }
})

const AddMemberContainer = connect(
  mapStateToProps, mapDispatchToProps
)(AddMember)

export default AddMemberContainer
