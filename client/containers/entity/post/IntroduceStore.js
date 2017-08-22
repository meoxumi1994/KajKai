import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { getBeFollow } from '~/containers/support'
import { getIntroduceStore } from '~/actions/asyn/store'
import IntroduceStore from '~/components/entity/post/IntroduceStore'

const mapStateToProps = (state, { storeid }) => {
    const g = (lang) => get(state.user.language, lang)
    const introducestore = state.inst.entity.post.introducestore[storeid]
    let isOwner = false
    for(let i=0; i< state.user.storeList.length ; i++){
        if(state.user.storeList[i].id == storeid){
            isOwner = true
            break
        }
    }
    let beFollow = false
    if(introducestore){
        beFollow =  getBeFollow(introducestore.follows, state.user.id)
    }
    return({
        ...state.user,
        userAvatar: state.user.avatarUrl,
        ...introducestore,
        isOwner: isOwner,
        id: storeid,
        beFollow: beFollow,
        STORE_NAME: g('STORE_NAME'),
        ADDRESS: g('ADDRESS'),
        ADDRESSMAP: g('ADDRESSMAP'),
        CATEGORY: g('CATEGORY'),
        PHONE: g('PHONE'),
        LIKE: g('LIKE'),
        ANOTHER_PEOPLE: g('ANOTHER_PEOPLE'),
        PEOPLE: g('PEOPLE'),
        AND: g('AND'),
        THIS: g('THIS'),
        BY: g('BY'),
        FOLLOW: g('FOLLOW'),
        PHOTOS: g('PHOTOS'),
        ABOUT: g('ABOUT'),
        FOLLOW_US: g('FOLLOW_US'),
        FOLLOWED: g('FOLLOWED'),
    })
}

const mapDispatchToProps = (dispatch, { storeid }) => ({
    onGetStore: () => {
        dispatch(getIntroduceStore(storeid))
    },
    follow: (storeid, username, userAvatar) => {
        dispatch({ type: 'server/FOLLOW', data: { type: 'store', id: storeid, username: username, avatarUrl: userAvatar }})
    },
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { id, username, userAvatar, ...anotherState } = stateProps
    const { follow, ...anotherDispatch } = dispatchProps
    return({
        onFollow: () => {
            follow(id, username, userAvatar)
        },
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const IntroduceStoreContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(IntroduceStore)

export default IntroduceStoreContainer
