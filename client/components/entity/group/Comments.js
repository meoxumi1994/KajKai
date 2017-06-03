import React from 'react'

import Comment from '~/containers/entity/row/Comment'
import CommentInput from '~/containers/entity/input/CommentInput'

const Comments = ({ id, groupcommentsId, isreply, listcm, istyping, myavatar }) => {
    console.log('Comments id', id)
    return(
        <div>
            <Comment avatarsize={37} id={id} replydispatch='server/JOIN_COMMENTS'/>
            <div className="row">
                <div className="col-xs-1">
                </div>
                <div className="col-xs-11">
                    {isreply &&
                        <div>
                            {listcm.map((item, index) =>
                                <Comment avatarsize={25} key={index} id={item.id} replydispatch='ENTITY_ROW_COMMENTS_REPLY' />)}
                            {istyping && <div>someone is typing .... </div>}
                            <div className="row">
                                <div className="col-xs-1">
                                    <img src={myavatar} style={{ width: 25, height: 25 }}/>
                                </div>
                                <div className="col-xs-11">
                                    <CommentInput groupcommentsId={groupcommentsId}
                                        id={id} paddingtopbot={0} request='server/ADD_COMMENTS'/>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Comments
