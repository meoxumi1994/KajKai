import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { search } from '~/actions/asyn/search'
import NewFeed from '~/components/home/NewFeed'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        ...state.inst.home.newfeed
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetSellpost: () => {
        dispatch(search({searchType: 'CATEGORY', keyword: 'hêh', id: -1, offset: 0, length: 2 }))
        // dispatch(changeKeyWord(keyword))
    }
})

const NewFeedContainer = connect(
    mapStateToProps, mapDispatchToProps
)(NewFeed)

export default NewFeedContainer
