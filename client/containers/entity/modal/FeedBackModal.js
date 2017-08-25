import { connect } from 'react-redux'
import { get } from '~/config/allString'
import { feedBack } from '~/actions/asyn/entity/modal/feedback'

import FeedBackModal from '~/components/entity/modal/FeedBackModal'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const feedback = state.inst.entity.modal.feedback
    return({
        feedback: feedback,
        FEED_BACK: g('FEED_BACK'),
        FEED_BACK_DESCRIPTION: g('FEED_BACK_DESCRIPTION'),
        THANK_TO_FEEDBACK: g('THANK_TO_FEEDBACK'),
        FEED_BACK_FAILED: g('FEED_BACK_FAILED'),
        DONE: g('DONE'),
        CLOSE: g('CLOSE'),
    })
}

const mapDispatchToProps = (dispatch, { sellpostId }) => ({
    onFeedBack: (content) => {
        dispatch(feedBack(sellpostId, content))
    }
})

const FeedBackModalContainer = connect(
    mapStateToProps, mapDispatchToProps
)(FeedBackModal)

export default FeedBackModalContainer
