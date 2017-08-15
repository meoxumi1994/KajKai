import { connect } from 'react-redux'
import { get } from '~/config/allString'

import LeaderComment from '~/components/entity/contact/LeaderComment'
import { getMoreComment } from '~/actions/asyn/entity/comment'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const leadercomment = state.inst.entity.contact.leadercomment[id]
    const status = state.inst.entity.contact.comment[id].status
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
        isOwner: isOwner,
        status: status,
        WRITE_COMMENT: g('WRITE_COMMENT')
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onCreateComment: (sellpostid, content, match) => {
        if(content)
            dispatch({ type: 'server/COMMENT', data: {
                    sellpostid: sellpostid,
                    leadercommentid: id,
                    match: match,
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
    onReplyProps: (index, commenterid, type, urlname, name, contentedit, match) => {
        dispatch({ type: 'INST_ENTITY_LEADERCOMMENT_CHANGE', id: id, key: 'isReply', value: true })
        if(index){
            const newvalue = name
            let newmatch = match || []
            newmatch = [
                ...newmatch,
                {
                    name: name,
                    link: (type=='user') ? ('/user/' + commenterid) : ('/' + urlname),
                    id: id,
                }
            ]
            dispatch({
                type: 'INST_ENTITY_LEADERCOMMENT_CHANGE',
                id: id,
                key: 'contentedit',
                value: (contentedit + newvalue),
            })
            dispatch({
                type: 'INST_ENTITY_LEADERCOMMENT_CHANGE',
                id: id,
                key: 'match',
                value: newmatch,
            })
        }
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const { offset, sellpostid, contentedit, match} = stateProps
    const { onGetMoreComment, onReplyProps, onCreateComment } = dispatchProps
    return({
        onEnter: () => {
            onCreateComment(sellpostid, contentedit, match)
        },
        onReply: (index, commenterid, type, urlname, name ) => {
            onReplyProps(index,commenterid, type, urlname, name, contentedit, match)
        },
        onGetMore: () => {
            onGetMoreComment(offset)
        },
        sellpostid: sellpostid,
        offset: offset,
        contentedit: contentedit,
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    })
}

const LeaderCommentContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(LeaderComment)

export default LeaderCommentContainer
