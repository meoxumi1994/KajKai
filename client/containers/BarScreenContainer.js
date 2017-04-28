import { connect } from 'react-redux'

import { language } from '../actions/language'
import BarScreen from '../components/BarScreen'

const mapStateToProps = (state, ownProps) => ({
    language: state.language,
    whoResult: state.whoResult
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const BarScreenContainer = connect(
    mapStateToProps, mapDispatchToProps
)(BarScreen)

export default BarScreenContainer
