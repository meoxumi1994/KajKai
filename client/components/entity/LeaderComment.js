import React from 'react'

import Comment from '~/containers/entity/Comment'
import CommentSuggest from '~/containers/entity/CommentSuggest'
import CallComment from '~/containers/entity/CallComment'

class LeaderComment extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { WRITE_COMMENT, comments, order, isReply, id, contentedit, avatarUrl, onReply, onChange,
            onEnter, offset, numcomment, onGetMore } = this.props
        return(
            <div>

                {comments.map((cm, index) => {
                    if(index){
                        return(
                            <Comment
                                leadercommentid={comments[0].id}
                                key={cm.id}
                                id={cm.id}
                                onReply={() => onReply(index, cm.commenterid)}
                                isStoreRepresent={false}
                                isleader={false}
                                />
                        )
                    }else{
                        return(
                            <div key={cm.id}>
                                <Comment
                                    id={cm.id}
                                    onReply={() => onReply(index, cm.commenterid)}
                                    isStoreRepresent={false}
                                    isleader={true}
                                    />
                                { (offset != -2 && numcomment > comments.length - 1 && comments.length > 1 ) &&
                                    <CommentSuggest
                                        id={3}
                                        isleader={false}
                                        onClick={() => onGetMore()}
                                        content={'View more '+ (numcomment - comments.length + 1 )+' comments'}
                                        // end={comments.length + ' of '+numcomment}
                                        />
                                }
                            </div>
                        )
                    }
                }

                )}
                {isReply &&
                    <CallComment
                        onEnter={() => onEnter()}
                        id={id}
                        handleChange={(e) => onChange('contentedit', e.target.value)}
                        content={contentedit}
                        isleader={false}
                        avatarUrl={avatarUrl}
                        placehoder={WRITE_COMMENT}
                        />
                }
            </div>
        )
    }
}

export default LeaderComment
