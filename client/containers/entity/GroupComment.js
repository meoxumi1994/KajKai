import { connect } from 'react-redux'
import { get } from '~/config/allString'

import GroupComment from '~/components/entity/GroupComment'

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
    return({
        ...groupcomment,
        ...user,
        isOwner: isOwner,
        avatarUrl: avatarUrl,
        WRITE_COMMENT_OR_ORDER: g('WRITE_COMMENT_OR_ORDER'),
        WRITE_COMMENT: g('WRITE_COMMENT'),
        id: id,
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onChange: (key, value) => {
        dispatch({ type: 'INST_ENTITY_GROUPCOMMENT_CHANGE', id: id, key: key, value: value })
    },
    onGetMore: (offset) => {
        console.log(offset, id)
    },
    onEnterProps: (content) => {
        if(content)
            dispatch({ type: 'server/LEADERCOMMENT', data: {
                    sellpostid: id,
                    content: content,
                    time: (new Date().getTime()),
                    order: [],
                }
            })
        dispatch({ type: 'INST_ENTITY_GROUPCOMMENT_CHANGE', id: id, key: 'content', value: '' })
    },
    onJoin: () => {
        dispatch({ type: 'server/JOIN_POST', data: { sellpostid: id }})
    },
    onLeave: () => {
        dispatch({ type: 'server/LEAVE_POST', data: { sellpostid: id }})
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { content, ...anotherState } = stateProps
    const { onEnterProps, ...anotherDispatch } = dispatchProps
    return({
        onEnter: () => {
            onEnterProps(content)
        },
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
