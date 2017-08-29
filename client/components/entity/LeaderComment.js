import React from 'react'

import Comment from '~/containers/entity/Comment'
import CommentSuggest from '~/containers/entity/CommentSuggest'
import CallComment from '~/containers/entity/CallComment'

class LeaderComment extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { WRITE_COMMENT, comments, isReply, id, contentedit, avatarUrl, onReply, onChange, order, status, storeid,
            sellpostid, onEnter, offset, numcomment, onGetMore, match, address, position } = this.props
        return(
            <div>
                {comments.map((cm, index) => {
                    if(index){
                        return(
                            <div key={cm.id}>
                                <div style={{ height: 10, marginLeft: 38, borderLeft: '2px solid #DDDFE2' }}></div>
                                <Comment
                                    storeid={storeid}
                                    sellpostid={sellpostid}
                                    leadercommentid={comments[0].id}
                                    key={cm.id}
                                    id={cm.id}
                                    onReply={() => onReply(index, cm.commenterid, cm.type, cm.urlname, cm.name)}
                                    isStoreRepresent={false}
                                    isleader={false}
                                    />
                                {(index == comments.length-1 && isReply) &&
                                    <div style={{ height: 10, marginLeft: 38, borderLeft: '2px solid #DDDFE2' }}></div>
                                }
                            </div>
                        )
                    }else{
                        return(
                            <div key={cm.id}>
                                <Comment
                                    address={address}
                                    position={position}
                                    storeid={storeid}
                                    sellpostid={sellpostid}
                                    status={status}
                                    order={order}
                                    id={cm.id}
                                    onReply={() => onReply(index, cm.commenterid, cm.type, cm.urlname, cm.name)}
                                    isStoreRepresent={false}
                                    isleader={true}
                                    />
                                {( offset != -2 && numcomment > comments.length && comments.length > 1 ) &&
                                    <CommentSuggest
                                        id={3}
                                        isleader={false}
                                        onClick={() => onGetMore()}
                                        content={'View more '+ (numcomment - comments.length )+' comments'}
                                        // end={comments.length + ' of '+numcomment}
                                        />
                                }
                            </div>
                        )
                    }
                }
                )}
                {isReply &&
                    <div>
                        {comments.length <= 1 &&
                            <div style={{ height: 10, marginLeft: 38, borderLeft: '2px solid #DDDFE2' }}></div>
                        }
                        <CallComment
                            onEnter={() => onEnter()}
                            id={id}
                            handleChange={(e) => onChange('contentedit', e.target.value)}
                            content={contentedit}
                            match={match}
                            isleader={false}
                            avatarUrl={avatarUrl}
                            placehoder={WRITE_COMMENT}
                            />
                    </div>
                }
                <div style={{ height: 10 }}></div>
            </div>
        )
    }
}

export default LeaderComment
