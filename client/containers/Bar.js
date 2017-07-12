import { connect } from 'react-redux'
import allString from '~/config/allString'

import { logOut } from '~/actions/asyn/user-login-register/login'
import { loadCategory } from '~/actions/asyn/category'
import { selectSearchType, changeKeyWord, changeLocation } from '~/actions/sync/search'
import Bar from '~/components/Bar'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => allString.get(state.user.language, lang)
    // const { width } = state.inst.app
    return ({
        LOG_IN: g('LOG_IN'),
        id: state.user.id,
        SEARCH_PRODUCT: g('SEARCH_PRODUCT'),
        SEARCH_LOCATION: g('SEARCH_LOCATION'),
        isusername: state.user.username,
        avatarUrl: state.user.avatarUrl,
        isloading: (state.auth == 'WHO_ING' || state.auth == 'LOGIN_ING'),
        unreadChat: state.inst.chat.left.unreadChat,
        // width: width,
        categories: state.inst.category,
        search: state.inst.search
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogoutClick: () => {
        dispatch(logOut())
    },
    setMultiChat: (value) => {
        dispatch({type: 'MULTIPLE_CHAT', data: value})
    },
    onLoadCategory: () => {
      dispatch(loadCategory())
    },
    onSearchTypeSelected: (id) => {
      dispatch(selectSearchType(id))
    },
    onKeyWordChanged: (keyword) => {
      dispatch(changeKeyWord(keyword))
    },
    onLocationChanged: (location) => {
      dispatch(changeLocation(location))
    }
})

const BarContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Bar)

export default BarContainer
