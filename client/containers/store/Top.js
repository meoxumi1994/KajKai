import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { getBeFollow } from '~/containers/support'
import Top from '~/components/store/Top'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { userid, id, avatarUrl, coverUrl, storename } = state.inst.store.index
    let isOwner = false
    for(let i=0; i< state.user.storeList.length ; i++){
        if(state.user.storeList[i].id == state.inst.store.index.id){
            isOwner = true
            break
        }
    }
    return({
        ...state.inst.store.index,
        id : id,
        beFollow: getBeFollow(state.inst.store.index.follows, state.user.id),
        isOwner: isOwner,
        name: storename,
        avatarUrl: avatarUrl,
        coverUrl: coverUrl,
        userid: userid,
        yourid: state.user.id,
        SETTING: g('SETTING'),
        PAGE: g('PAGE'),
        ABOUT: g('ABOUT'),
        PHOTOS: g('PHOTOS'),
        STATISTIC: g('STATISTIC'),
        SEND_MESSAGE: g('SEND_MESSAGE'),
        FOLLOW_US: g('FOLLOW_US'),
        FOLLOWED: g('FOLLOWED'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onUploadImage : (typeUrl, e) => {
        dispatch({ type: 'ENTITY_MODAL_UPLOAD_IMAGE_OPEN', typeUrl: typeUrl})
    },
    follow: (storeid) => {
        dispatch({ type: 'server/FOLLOW', data: { type: 'store', id: storeid }})
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

const TopContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(Top)

export default TopContainer
