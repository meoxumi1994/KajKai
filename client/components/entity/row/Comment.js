import React from 'react'

const Comment = ({ avatar, name, time, likes, numlikes, numreplys, content, onHandleChangeContent, onLikeClick, onReplyClick}) => {
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
            </div>
        </div>
    )
}

export default Comment
