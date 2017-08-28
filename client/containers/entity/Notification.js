import { connect } from 'react-redux'
import { get } from '~/config/allString'
import { getTime } from '~/containers/support'

import { updateNotification } from '~/actions/asyn/entity/notification'
import Notification from '~/components/entity/Notification'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const notification = state.inst.entity.notification[id]
    let isYourStore = false
    if(notification){
        for(let i=0; i< state.user.storeList.length ; i++){
            if( state.user.storeList[i].urlname == notification.urlname ){
                isYourStore = true
                break
            }
        }
    }
    const commentName = (notification.comment && notification.comment.name) || (notification.leadercomment && notification.leadercomment.name)
    let isYourComment = false
    isYourComment = isYourComment || (notification.leadercomment && notification.leadercomment.commenterid == state.user.id)
    isYourComment = isYourComment || (notification.comment && notification.comment.commenterid == state.user.id)

    const commenterIdOfLeaderComment = (notification.leadercomment && notification.leadercomment.commenterid)

    let isYourLeaderComment = state.user.id == commenterIdOfLeaderComment
    if(commenterIdOfLeaderComment){
        for(let i=0; i< state.user.storeList.length ; i++){
            if( state.user.storeList[i].id == commenterIdOfLeaderComment ){
                isYourLeaderComment = true
            }
            if( state.user.storeList[i].id == (notification.leadercomment && notification.leadercomment.commenterid) ){
                isYourComment = true
            }
            if( state.user.storeList[i].id == (notification.comment && notification.comment.commenterid) ){
                isYourComment = true
            }
        }
    }
    // let isYourLeaderComment = notification.
    return({
        ...notification,
        isYourStore: isYourStore,
        isYourComment: isYourComment,
        commentName: commentName,
        isYourLeaderComment: isYourLeaderComment,
        time: getTime(notification.time, state.user.language),
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
        CREATE_NEW_STORE: g('CREATE_NEW_STORE'),
        MY_SELL_POST: g('MY_SELL_POST'),
        CREATE_NEW_SELL_POST: g('CREATE_NEW_SELL_POST'),
        SELF: g('SELF'),
        CLOSED: g('CLOSED'),
        OPENED: g('OPENED'),
        IN: g('IN'),
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    clickNotification: () => {
        dispatch(updateNotification(id))
    }
})

const NotificationContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Notification)

export default NotificationContainer
