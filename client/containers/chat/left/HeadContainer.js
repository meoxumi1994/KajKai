import { connect } from 'react-redux'
import Head from '~/components/chat/left/Head'
import { changeDisplay } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    createNewChat: () => {
        dispatch({type: 'NEW_CHAT', data: {mesId: 0, label: 'Tin nhắn mới'}})
        dispatch(changeDisplay('ADD_MEMBER', 0, true))
    }
})

const HeadContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Head)

export default HeadContainer
