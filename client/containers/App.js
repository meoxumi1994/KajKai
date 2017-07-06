import { connect } from 'react-redux'
import chatStyles from '~/components/chat/chatStyles'
import App from '../components/App'
import { onWho } from '../actions/asyn/app'
import { getChatList } from '~/actions/asyn/chat/restful'

const mapStateToProps = (state, ownProps) => {
    const { width, height } = state.inst.app
    const { catagory, currentThemes} = state.inst.chat.display.themes
    // let styles = chatStyles.getMultiChat(catagory[currentThemes])
    return ({
        width: width,
        height: height,
        username: state.user.username,
        auth: state.auth,
        children: ownProps.children,
        // messagesKey: state.inst.chat.center.multiChat.messagesKey,
        // messagesMap: state.inst.chat.center.multiChat.messagesMap,
        // styles
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onWho: () => {
        dispatch(onWho())
    },
    onScroll : (scrollTop) => {
        dispatch({ type: 'ON_SCROLL', scrollTop: scrollTop })
    },
    getChatList: () => {
        dispatch(getChatList(Date.now(), 10))
    }
})

const AppContainer = connect(
    mapStateToProps, mapDispatchToProps
)(App)

export default AppContainer
