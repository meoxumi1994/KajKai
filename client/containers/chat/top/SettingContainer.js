import { connect } from 'react-redux'
import Setting from '~/components/chat/top/Setting'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeGroupName: () => {

  }
})

const SettingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting)

export default SettingContainer
