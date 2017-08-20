import { connect } from 'react-redux'
import { get } from '~/config/allString'

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
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onUploadImage : (typeUrl, e) => {
        dispatch({ type: 'ENTITY_MODAL_UPLOAD_IMAGE_OPEN', typeUrl: typeUrl})
    }
})

const TopContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Top)

export default TopContainer
