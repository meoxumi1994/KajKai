import React from 'react'

import Comment from '~/containers/entity/row/Comment'
import CommentInput from '~/containers/entity/input/CommentInput'

const Comments = ({ id, products, content, avatar, myavatar, name, time,
    status, likes, numlikes, numreplys, istyping, isreply, listcm, onHandleChangeContent, onLikeClick, onReplyClick }) => {
    return(
        <div className="row">
            <div className="col-xs-1">
                <img src={avatar} style={{ width: 37, height: 37 }}/>
            </div>
            <div className="col-xs-11">
                <strong >{name}</strong>{" "}
                <span>{content}</span>
                <div>
                    <div className="btn btn-transparent btn-xs" onClick={() => onLikeClick()}><a>Like</a>{" " + numlikes}</div>
                    <div className="btn btn-transparent btn-xs" onClick={() => onReplyClick()}><a>Reply</a>{" " + numreplys}</div>
                </div>
                {isreply &&
                    <div>
                        {listcm.map((item, index) => <Comment key={index} id={item}/>)}
                        {istyping && <div>someone is typing .... </div>}
                        <div className="row">
                            <div className="col-xs-1">
                                <img src={myavatar} style={{ width: 37, height: 37 }}/>
                            </div>
                            <div className="col-xs-11">
                                <CommentInput id={id}/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Comments
