import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { search } from '~/actions/asyn/search'
import Home from '~/components/home'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { scrollTop, scrollLeft, height } = state.inst.app
    return({
        store: state.inst.store.index,
        iswhoing: (state.auth == 'WHO_ING' || state.auth == 'WAIT'),
        isusername: state.user.username,
        scrollTop: scrollTop,
        scrollLeft: scrollLeft,
        height: height,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSearchQueryUpdated: (searchQuery) => {
      dispatch(search(searchQuery))
    },
    onNeedPost: () => {
        console.log('onNeedPost')
        
    }
})

const HomeContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Home)

export default HomeContainer
