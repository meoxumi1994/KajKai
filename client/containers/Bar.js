import { connect } from 'react-redux'
import allString from '~/config/allString'

import { logOut } from '~/actions/asyn/user-login-register/login'
import { loadCategory } from '~/actions/asyn/category'
import { search } from '~/actions/asyn/search'
import { updateNotification } from '~/actions/asyn/entity/notification'
import Bar from '~/components/Bar'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => allString.get(state.user.language, lang)
    const bar = state.inst.bar
    const { searchType, offset } = state.inst.search
    const { height, width} = state.inst.app
    return ({
        ...bar,
        ...state.user,
        width: width,
        height: height,
        searchType: searchType,
        LOG_IN: g('LOG_IN'),
        SEARCH: g('SEARCH'),
        SEARCH_LOCATION: g('SEARCH_LOCATION'),
        isloading: (state.auth == 'WHO_ING' || state.auth == 'LOGIN_ING'),
        unreadChat: state.inst.chat.left.unreadChat,
        categories: state.inst.category,
        search: state.inst.search,
        CREATE_STORE: g('CREATE_STORE'),
        HOME: g('HOME'),
        SETTING: g('SETTING'),
        LOG_OUT: g('LOG_OUT'),
        unreadChat: state.inst.chat.unread
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogoutClick: () => {
        dispatch(logOut())
    },
    onLoadCategory: () => {
        dispatch(loadCategory())
    },
    weSearch: (currentType, currentCategoryId, keyword, lat, lng, offset) => {
        // console.log('ONSEARCH ONSEARCH ONSEARCH', currentType, currentCategoryId, keyword, lat, lng, offset)
        if(currentType== 'category' || currentType== 'store' || currentType == 'user'){
            dispatch(search({ id: currentCategoryId, currentType, keyword, lat, lng, offset: 0, length: (currentType=='category') ? 3 : 10 }))
        }
        // ownProps.history.push("/")
    },
    onChange: (key, value) => {
        if(key == 'currentCategoryId'){
            if(value == -2){
                dispatch({ type: 'INST_BAR_CHANGE', key: 'currentType', value: 'store' })
            }else
            if(value == -3){
                dispatch({ type: 'INST_BAR_CHANGE', key: 'currentType', value: 'user' })
            }else {
                dispatch({ type: 'INST_BAR_CHANGE', key: 'currentType', value: 'category' })
            }
            dispatch({ type: 'INST_BAR_CHANGE', key: 'keyword', value: '' })
        }
        dispatch({ type: 'INST_BAR_CHANGE', key: key, value: value })
    },
    resetChatQuantity: () => {
        dispatch({ type: 'server/RESET_UNREAD_CHATS_QUANTITY' })
    },
    clickNotification: () => {

    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { currentType, currentCategoryId, currentCategory, positionname, keyword, offset, lat, lng, ...anotherState } = stateProps
    const { onSearch, onChange, weSearch, ...anotherDispatch } = dispatchProps
    return({
        onLocationChanged: (lat, lng) => {
            onChange('lat',lat)
            onChange('lng',lng)
            // weSearch(currentType, currentCategoryId, keyword, lat, lng, offset)
            if(currentType!= 'category' && currentType!= 'store' && currentType != 'user'){
                window.location = "/home/"+currentType+"?id="+currentCategoryId+"&keyword="
                +keyword+"&lat="+lat+"&lng="+lng+"&offset="+offset+"&name="+currentCategory+"&positionname="+positionname
            }
        },
        onSearch: () => {
            // weSearch(currentType, currentCategoryId, keyword, lat, lng, offset)
            // console.log("/home/"+currentType+"?id="+currentCategoryId+"&keyword="+keyword+"&lat="+lat+"&lng="+lng+"&offset="+offset)
            if(currentType== 'category' || currentType== 'store' || currentType == 'user'){
                window.location = "/home/"+currentType+"?id="+currentCategoryId+"&keyword="
                +keyword+"&lat="+lat+"&lng="+lng+"&offset="+offset+"&name="+currentCategory+"&positionname="+positionname
            }
        },
        onChangeTypeSelected: (id, value ) => {
            onChange('currentCategoryId', id)
            onChange('currentCategory', value)
        },
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const BarContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(Bar)

export default BarContainer
