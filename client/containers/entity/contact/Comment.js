import { connect } from 'react-redux'
import { get } from '~/config/allString'
import { getTime, getBeLike } from '~/containers/support'

import Comment from '~/components/entity/contact/Comment'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const comment = state.inst.entity.contact.comment[id]
    const store = state.inst.store.index
    let yourid = state.user.id
    state.user.storeList.map((item) => {
        if(item.id == store.id)
            yourid = store.id
    })
    let isyour = true
    let isOwner = false
    for(let i=0; i< state.user.storeList.length ; i++){
        if(state.user.storeList[i].id == state.inst.store.index.id){
            isOwner = true
            break
        }
    }
    return({
        ...comment,
        isRead: (yourid == comment.commenterid ) ? false : comment.isRead,
        isOwner: isOwner,
        time: getTime(comment.time),
        beLike: getBeLike(comment.likes, yourid),
        RECEIVE: g('RECEIVE'),
        RECEIVED: g('RECEIVED'),
        DONE: g('DONE'),
        LIKE: g('LIKE'),
        REPLY: g('REPLY'),
    })
}

const mapDispatchToProps = (dispatch, { id, isleader, leadercommentid }) => ({
    onReceive: () => {
        dispatch({ type: 'server/RECEIVE', data: {
            type: 'comment',
            leadercommentid: id,
        }})
    },
    removeRead: (isRead) => {
        if(isRead)
            dispatch({ type: 'INST_ENTITY_COMMENT_CHANGE', id: id, key: 'isRead', value: false })
    },
    onDone: () => {
        dispatch({ type: 'server/DONE', data: {
            type: 'comment',
            leadercommentid: id,
        }})
    },
    onChange : (key, value) => {
        dispatch({ type: 'INST_ENTITY_COMMENT_CHANGE', id: id, key: key, value: value })
    },
    onLike: () => {
        if(isleader){
            dispatch({ type: 'server/LIKE', data: {
                type: 'comment',
                status: 'like',
                leadercommentid: id,
            }})
        }else{
            dispatch({ type: 'server/LIKE', data: {
                type: 'comment',
                status: 'like',
                commentid: id,
                leadercommentid: leadercommentid,
            }})
        }
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { isRead, ...anotherState } = stateProps
    const { removeRead, ...anotherDispatch } = dispatchProps
    return({
        onRemoveRead: () => {
            removeRead(isRead)
        },
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const CommentContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(Comment)

export default CommentContainer
