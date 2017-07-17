import React from 'react'

import Comment from '~/containers/entity/Comment'
import CommentSuggest from '~/containers/entity/CommentSuggest'
import CallComment from '~/containers/entity/CallComment'

class LeaderComment extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { WRITE_COMMENT, comments, order, isReply, id, contentedit, avatarUrl, onReply, onChange, onEnter } = this.props
        return(
            <div>
                {comments.map((cm, index) => {
                    if(index){
                        return(
                            <Comment
                                key={cm.id}
                                id={cm.id}
                                onReply={() => onReply(index, cm.commenterid)}
                                isStoreRepresent={false}
                                isleader={false}
                                />
                        )
                    }else{
                        return(
                            <Comment
                                key={cm.id}
                                id={cm.id}
                                onReply={() => onReply(index, cm.commenterid)}
                                isStoreRepresent={false}
                                isleader={true}
                                />
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
