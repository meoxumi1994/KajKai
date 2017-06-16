import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Message from '~/components/contacthistory/message'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const MessageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Message)

export default MessageContainer
