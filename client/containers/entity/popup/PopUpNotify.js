import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { getTime } from '~/containers/support'
import PopUpNotify from '~/components/entity/popup/PopUpNotify'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const popupnotification = state.inst.entity.popup.popupnotification[id]
    let isYourStore = false
    if(popupnotification){
        for(let i=0; i< state.user.storeList.length ; i++){
            if( state.user.storeList[i].urlname == popupnotification.urlname ){
                isYourStore = true
                break
            }
        }
    }
    const commentName = (popupnotification.comment && popupnotification.comment.name) || (popupnotification.leadercomment && popupnotification.leadercomment.name)
    let isYourComment = false
    isYourComment = isYourComment || (popupnotification.leadercomment && popupnotification.leadercomment.commenterid == state.user.id)
    isYourComment = isYourComment || (popupnotification.comment && popupnotification.comment.commenterid == state.user.id)

    const commenterIdOfLeaderComment = (popupnotification.leadercomment && popupnotification.leadercomment.commenterid)

    let isYourLeaderComment = state.user.id == commenterIdOfLeaderComment
    if(commenterIdOfLeaderComment){
        for(let i=0; i< state.user.storeList.length ; i++){
            if( state.user.storeList[i].id == commenterIdOfLeaderComment ){
                isYourLeaderComment = true
            }
            if( state.user.storeList[i].id == (popupnotification.leadercomment && popupnotification.leadercomment.commenterid) ){
                isYourComment = true
            }
            if( state.user.storeList[i].id == (popupnotification.comment && popupnotification.comment.commenterid) ){
                isYourComment = true
            }
        }
    }
    return({
        ...popupnotification,
        isYourStore: isYourStore,
        isYourComment: isYourComment,
        commentName: commentName,
        isYourLeaderComment: isYourLeaderComment,
        time: getTime(popupnotification.time, state.user.language),
        ALSO_COMMENT_IN: g('ALSO_COMMENT_IN'),
        ORDER_ON: g('ORDER_ON'),
        A_SELL_POST_YOU_FOLLOW: g('A_SELL_POST_YOU_FOLLOW'),
        YOUR_SELL_POST: g('YOUR_SELL_POST'),

        REPLY_TO_COMMENT_OF: g('REPLY_TO_COMMENT_OF'),
        COMMENT_ON_A_SELL_POST: g('COMMENT_ON_A_SELL_POST'),
        YOURS: g('YOURS'),
        IN_STORE_OF: g('IN_STORE_OF'),

        LIKED_A: g('LIKED_A'),
        COMMENT_2: g('COMMENT_2'),

        SELL_POST_2: g('SELL_POST_2'),

        IN_STORE: g('IN_STORE'),
        CHANGED_SELL_POST_IN_STORE: g('CHANGED_SELL_POST_IN_STORE'),

        RECEIVED_TO: g('RECEIVED_TO'),
        ORDER: g('ORDER'),

        OF: g('OF'),

        MY_SELL_POST: g('MY_SELL_POST'),
        CREATE_NEW_SELL_POST: g('CREATE_NEW_SELL_POST'),
        SELF: g('SELF'),
        CLOSED: g('CLOSED'),
        OPENED: g('OPENED'),
        IN: g('IN'),
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onClose: () => {
        dispatch({ type: 'INST_ENTITY_POPUP_NOTIFY', id: id, key: 'isclose', value: true })
    }
})

const PopUpNotifyContainer = connect(
    mapStateToProps, mapDispatchToProps
)(PopUpNotify)

export default PopUpNotifyContainer
