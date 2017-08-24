import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { getBeFollow } from '~/containers/support'
import Left from '~/components/store/Left'
import { updateUser } from '~/actions/asyn/user'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const user = state.user
    let isOwner = false
    for(let i=0; i< state.user.storeList.length ; i++){
        if(state.user.storeList[i].id == state.inst.store.index.id){
            isOwner = true
            break
        }
    }
    return({
        ...user,
        avatarUrl: undefined,
        ...state.inst.store.index,
        id: state.inst.store.index.id,
        beFollow: getBeFollow(state.inst.store.index.follows, state.user.id),
        isOwner: isOwner,
        STORE: g('STORE'),
        HOME: g('HOME'),
        CREATE_STORE: g('CREATE_STORE'),
        FOLLOW: g('FOLLOW'),
        STORE_BOLD: g('STORE_BOLD'),
        BASIC: g('BASIC'),
        CREATE_STORE: g('CREATE_STORE'),
        SETTING_BOLD: g('SETTING_BOLD'),
        PAGE: g('PAGE'),
        ABOUT: g('ABOUT'),
        PHOTOS: g('PHOTOS'),
        STATISTIC: g('STATISTIC'),
        SETTING: g('SETTING'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    follow: (storeid) => {
        dispatch({ type: 'server/FOLLOW', data: { type: 'store', id: storeid }})
    },
    changeLanguage: (language) => {
        dispatch(updateUser({ language : language }))
    },
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { id, ...anotherState } = stateProps
    const { follow, ...anotherDispatch } = dispatchProps
    return({
        onFollow: () => {
            follow(id)
        },
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const LeftContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(Left)

export default LeftContainer
