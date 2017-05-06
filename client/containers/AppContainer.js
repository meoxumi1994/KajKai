import { connect } from 'react-redux'

import App from '../components/App'
import { onWho } from '../actions/asyn/app'

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
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
