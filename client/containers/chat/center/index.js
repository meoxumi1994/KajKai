import { connect } from 'react-redux'
import ChatCenter from '~/components/chat/center'
import chatStyles from '~/components/chat/chatStyles'
import { getChatList } from '~/actions/asyn/chat/restful'

const mapStateToProps = (state, ownProps) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    setCurrentChat: (mesId) => {
        dispatch({type: 'SET_CURRENT_CHAT', data: {mesId: mesId}})
    },
    getChatList: () => {
        dispatch(getChatList(Date.now()))
    }
})

const ChatCenterContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatCenter)

export default ChatCenterContainer
