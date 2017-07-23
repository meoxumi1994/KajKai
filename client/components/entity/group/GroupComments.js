import React from 'react'

import Comments from '~/containers/entity/group/Comments'
import CommentInput from '~/containers/entity/input/CommentInput'

const GroupComments = ({ id, myavatar, content, time, comments, products }) => {
    return(
        <div className="container-fluid">
            <div className="row" style={{ marginBottom: 5 }}>
                <div className="col-xs-1">
                    <img src={myavatar} style={{ width: 37, height: 37 }}/>
                </div>
                <div className="col-xs-11">
                    <div style={{ marginTop: 2 }}>
                        <CommentInput groupcommentsId={id}
                            id={id} paddingtopbot={5} request='server/ADD_GROUPCOMMENTS'/>
                    </div>
                </div>
            </div>
            {comments.map((item,index) => <Comments groupcommentsId={id}
                id={item.id} key={index} myavatar={myavatar}/>)}
        </div>
    )
}

export default GroupComments
