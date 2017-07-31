import { connect } from 'react-redux'
import { get } from '~/config/allString'

import LeaderComment from '~/components/entity/LeaderComment'
import { getMoreComment } from '~/actions/asyn/entity/comment'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const leadercomment = state.inst.entity.leadercomment[id]
    let isOwner = false
    let avatarUrl = state.user.avatarUrl
    for(let i=0; i< state.user.storeList.length ; i++){
        if(state.user.storeList[i].id == state.inst.store.index.id){
            isOwner = true
            avatarUrl = state.user.storeList[i].avatarUrl
            break
        }
    }
    return({
        ...leadercomment,
        avatarUrl: avatarUrl,
        WRITE_COMMENT: g('WRITE_COMMENT')
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onCreateComment: (sellpostid, content) => {
        if(content)
            dispatch({ type: 'server/COMMENT', data: {
                    sellpostid: sellpostid,
                    leadercommentid: id,
                    content: content,
                    time: (new Date().getTime()),
                    order: [],
                }
            })
        dispatch({ type: 'INST_ENTITY_LEADERCOMMENT_CHANGE', id: id, key: 'contentedit', value: '' })
    },
    onGetMoreComment: (offset) => {
        if(offset != -2)
            dispatch(getMoreComment(offset,id))
    },
    onChange: (key, value) => {
        dispatch({ type: 'INST_ENTITY_LEADERCOMMENT_CHANGE', id: id, key: key, value: value })
    },
    onReplyProps: (index, commenterid, contentedit) => {
        dispatch({ type: 'INST_ENTITY_LEADERCOMMENT_CHANGE', id: id, key: 'isReply', value: true })
        if(index)
            dispatch({
                type: 'INST_ENTITY_LEADERCOMMENT_CHANGE',
                id: id,
                key: 'contentedit',
                value: (contentedit + '[' + commenterid + ']')
            })
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { offset, sellpostid, contentedit, ...anotherState } = stateProps
    const { onGetMoreComment, onReplyProps, onCreateComment, ...anotherDispatch } = dispatchProps
    return({
        onEnter: () => {
            onCreateComment(sellpostid, contentedit)
        },
        onReply: (index, commenterid) => {
            onReplyProps(index,commenterid,contentedit)
        },
        onGetMore: () => {
            onGetMoreComment(offset)
        },
        sellpostid: sellpostid,
        offset: offset,
        contentedit: contentedit,
        ...ownProps,
        ...anotherState,
        ...anotherDispatch,
    })
}

const LeaderCommentContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(LeaderComment)

export default LeaderCommentContainer
