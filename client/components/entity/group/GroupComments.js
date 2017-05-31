import React from 'react'

import Comments from '~/containers/entity/group/Comments'
import CommentInput from '~/containers/entity/input/CommentInput'

const GroupComments = ({ id, myavatar, content, time, listcms, products }) => {
    return(
        <div className="container-fluid">
            <div className="row" style={{ marginBottom: 5 }}>
                <div className="col-xs-1">
                    <img src={myavatar} style={{ width: 37, height: 37 }}/>
                </div>
                <div className="col-xs-11">
                    <div style={{ marginTop: 2 }}>
                        <CommentInput id={id} paddingtopbot={5}/>
                    </div>
                </div>
            </div>
            {listcms.map((item,index) => <Comments id={item.id} key={index} myavatar={myavatar}/>)}
        </div>
    )
}

export default GroupComments
