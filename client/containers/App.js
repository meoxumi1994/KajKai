import { connect } from 'react-redux'

import App from '../components/App'
import { onWho } from '../actions/asyn/app'

const mapStateToProps = (state, ownProps) => {
    const { width, height } = state.inst.app
    return ({
        width: width,
        height: height,
        username: state.user.username,
        auth: state.auth,
        children: ownProps.children,
        chat: state.inst.chat.center
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onWho: () => {
        dispatch(onWho())
    },
    onScroll : (scrollTop) => {
        dispatch({ type: 'ON_SCROLL', scrollTop: scrollTop })
    },
    setMultiChat: (value) => {
        dispatch({type: 'MULTIPLE_CHAT', data: value})
      }
})

const AppContainer = connect(
    mapStateToProps, mapDispatchToProps
)(App)

export default AppContainer
