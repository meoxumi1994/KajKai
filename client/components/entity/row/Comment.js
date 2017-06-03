import React from 'react'

const Comment = ({ avatar, avatarsize, name, time, likes, numlikes, numreplys, content, onLikeClick, onReplyClick}) => {
    return(
        <div className="row">
            <div className="col-xs-1">
                <img src={avatar} style={{ width: avatarsize, height: avatarsize }}/>
            </div>
            <div className="col-xs-11">
                <strong >{name}</strong>{" "}
                <span>{content}</span>
                <div>
                    <div className="btn btn-transparent btn-xs" onClick={() => onLikeClick()}><a>Like</a>{" " + numlikes}</div>
                    <div className="btn btn-transparent btn-xs" onClick={() => onReplyClick()}><a>Reply</a>{" " + numreplys}</div>
                    <small className="text-muted">{" "+time}</small>
                </div>
            </div>
        </div>
    )
}

export default Comment
