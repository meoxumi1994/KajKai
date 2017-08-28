import { connect } from 'react-redux'
import chatStyles from '~/containers/chat/chatStyles'
import App from '../components/App'
import { onWho } from '../actions/asyn/app'
import { getChatList } from '~/actions/asyn/chat/restful'

const mapStateToProps = (state, ownProps) => {
    const { width, height } = state.inst.app
    const { showModal } = state.inst.entity.thumnail.progress
    return ({
        width: width,
        height: height,
        username: state.user.username,
        auth: state.auth,
        children: ownProps.children,
        showProgress: showModal,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onWho: () => {
        dispatch(onWho())
    },
    onScroll : (scrollTop) => {
        dispatch({ type: 'ON_SCROLL', scrollTop: scrollTop })
    },
    getChatList: (id) => {
        dispatch(getChatList(-1, 10))
        dispatch({type: 'CURRENT_CHAT', subType: 'SET_USER_ID', data: {id: id}})
    },
    closeProgress: () => {
        dispatch({ type: 'PROGRESS_CLOSE' })
    }
})

const AppContainer = connect(
    mapStateToProps, mapDispatchToProps
)(App)

export default AppContainer
