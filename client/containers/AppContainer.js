import { connect } from 'react-redux'

import App from '../components/App'
import { onWho, whoResult } from '../actions/firstLoading'

const mapStateToProps = (state, ownProps) => ({
    whoResult: state.whoResult,
    children: ownProps.children
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onWho: ()=>{
        return dispatch(onWho())
    }
})

const AppContainer = connect(
    mapStateToProps, mapDispatchToProps
)(App)

export default AppContainer
