import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { search } from '~/actions/asyn/search'
import NewFeed from '~/components/home/NewFeed'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { height, scrollTop } = state.inst.app
    return({
        ... state.inst.bar,
        ...state.inst.home.newfeed,
        STORE: g('STORE'),
        USER: g('USER'),
        height,
        scrollTop,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    weSearch: (currentType, currentCategoryId, keyword, lat, lng, offset) => {
        // console.log('ONSEARCH ONSEARCH ONSEARCH', currentType, currentCategoryId, keyword, lat, lng, offset)
        dispatch(search({ id: currentCategoryId, currentType, keyword, lat, lng, offset,
            length: (currentType=='category') ? 3 : 10 }))
        // ownProps.history.push("/")
    },
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { type, currentType, currentCategoryId, currentCategory, positionname, keyword, offset, lat, lng,
        ...anotherState } = stateProps
    const { weSearch, ...anotherDispatch } = dispatchProps
    return({
        onGetMore : () => {
            if(type != 'SEARCH_ING' && offset != -2 ){
                weSearch(currentType, currentCategoryId, keyword, lat, lng, offset)
            }
        },
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const NewFeedContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(NewFeed)

export default NewFeedContainer
