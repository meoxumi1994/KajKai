import { connect } from 'react-redux'
import AddMember from '~/components/chat/top/AddMember'

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onNewChatSubmit: (id) => {
        console.log('id ',id);
    }
})

const AddMemberContainer = connect(
  mapStateToProps, mapDispatchToProps
)(AddMember)

export default AddMemberContainer
