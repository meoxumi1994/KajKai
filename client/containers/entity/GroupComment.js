import { connect } from 'react-redux'
import { get } from '~/config/allString'

import GroupComment from '~/components/entity/GroupComment'
import { getMoreLeaderComment } from '~/actions/asyn/entity/comment'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const groupcomment = state.inst.entity.groupcomment[id]
    const user = state.user
    let isOwner = false
    let avatarUrl = user.avatarUrl
    for(let i=0; i< state.user.storeList.length ; i++){
        if(state.user.storeList[i].id == state.inst.store.index.id){
            isOwner = true
            avatarUrl = state.user.storeList[i].avatarUrl
            break
        }
    }
    // console.log(groupcomment)
    return({
        ...groupcomment,
        ...user,
        userid: state.user.id,
        isOwner: isOwner,
        avatarUrl: avatarUrl,
        WRITE_COMMENT_OR_ORDER: g('WRITE_COMMENT_OR_ORDER'),
        WRITE_COMMENT: g('WRITE_COMMENT'),
        CLOSE_STORE_DESCRIPTION: g('CLOSE_STORE_DESCRIPTION'),
        id: id,
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onChange: (key, value) => {
        dispatch({ type: 'INST_ENTITY_GROUPCOMMENT_CHANGE', id: id, key: key, value: value })
    },
    onGetMoreLeaderComment: (offset) => {
        if(offset != -2)
            dispatch(getMoreLeaderComment('sellpost',offset,id))
    },
    onEnterProps: (content, order) => {
        if(content || (order && order.length))
            dispatch({ type: 'server/LEADERCOMMENT', data: {
                    sellpostid: id,
                    content: content,
                    time: (new Date().getTime()),
                    order: order,
                }
            })
        dispatch({ type: 'INST_ENTITY_GROUPCOMMENT_CHANGE', id: id, key: 'content', value: '' })
        dispatch({ type: 'INST_ENTITY_GROUPCOMMENT_CHANGE', id: id, key: 'order', value: [] })
    },
    onJoin: () => {
        dispatch({ type: 'server/JOIN_POST', data: { sellpostid: id }})
    },
    onLeave: () => {
        dispatch({ type: 'server/LEAVE_POST', data: { sellpostid: id }})
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { offset, content, order, ...anotherState } = stateProps
    const { onGetMoreLeaderComment, onEnterProps, ...anotherDispatch } = dispatchProps
    return({
        onEnter: () => {
            onEnterProps(content, order)
        },
        onGetMore: () => {
            onGetMoreLeaderComment(offset)
        },
        order: order,
        content: content,
        ...ownProps,
        ...anotherState,
        ...anotherDispatch,
    })
}

const GroupCommentContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(GroupComment)

export default GroupCommentContainer
