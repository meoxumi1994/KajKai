import React from 'react'

import CommentSuggest from '~/containers/entity/CommentSuggest'
import Comment from '~/containers/entity/Comment'
import CallComment from '~/containers/entity/CallComment'

class GroupComment extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { WRITE_COMMENT_OR_ORDER, comments, leadercomments } = this.props
        return(
            <div style={{ padding: '10px 0px 10px 0px'}}>
                <CommentSuggest
                    id={0}
                    isleader={true}
                    content={'View more previous comments'}
                    end={'3 of 18'}
                    />
                <Comment
                    id={0}
                    isleader={true}
                    onReceive={true}
                    isStoreRepresent={true}
                    avatar='/images/avatar.jpg'
                    avatarsize={40}
                    name='Phương Nguyễn‎'
                    content='Tất cả các đơn síp đi rồi các bạn ạ ..'
                    time='39 mins'
                    />
                <Comment
                    id={1}
                    isStoreRepresent={true}
                    avatar='/images/avatar.jpg'
                    avatarsize={40}
                    name='Phương Nguyễn‎'
                    content='Suất của b 40k nhé. 11h hơn mới đi đơn đầu tiên. Lúc đó b có nhận được k'
                    time='39 mins'
                    />
                <Comment
                    id={2}
                    isStoreRepresent={true}
                    avatar='/images/avatar.jpg'
                    avatarsize={40}
                    name='Phương Nguyễn‎'
                    content='Suất của b 40k nhé. 11h hơn mới đi đơn đầu tiên. Lúc đó b có nhận được k'
                    time='39 mins'
                    />
                <CommentSuggest
                    id={1}
                    src='/images/reply.svg'
                    isleader={false}
                    imgsrc='/images/avatar.jpg'
                    content={' Phương Nguyễn Replied . 2 Replies'}
                    time={'1 hrs'}
                    />
                <Comment
                    id={3}
                    isleader={true}
                    onReceive={true}
                    isStoreRepresent={true}
                    avatar='/images/avatar.jpg'
                    avatarsize={40}
                    name='Phương Nguyễn‎'
                    content='Tất cả các đơn síp đi rồi các bạn ạ ..'
                    time='39 mins'
                    />
                <Comment
                    isStoreRepresent={true}
                    avatar='/images/avatar.jpg'
                    avatarsize={40}
                    name='Phương Nguyễn‎'
                    content='Suất của b 40k nhé. 11h hơn mới đi đơn đầu tiên. Lúc đó b có nhận được k'
                    time='39 mins'
                    />
                <Comment
                    id={4}
                    isStoreRepresent={true}
                    avatar='/images/avatar.jpg'
                    avatarsize={40}
                    name='Phương Nguyễn‎'
                    content='Suất của b 40k nhé. 11h hơn mới đi đơn đầu tiên. Lúc đó b có nhận được k'
                    time='39 mins'
                    />
                <CallComment
                    id={0}
                    isleader={false}
                    avatarUrl='/images/avatar.jpg'
                    placehoder={WRITE_COMMENT_OR_ORDER}
                    />
                <Comment
                    id={5}
                    isleader={true}
                    onReceive={true}
                    isStoreRepresent={true}
                    avatar='/images/avatar.jpg'
                    avatarsize={40}
                    name='Phương Nguyễn‎'
                    content='Tất cả các đơn síp đi rồi các bạn ạ ..'
                    time='39 mins'
                    />
                <CommentSuggest
                    id={2}
                    isleader={false}
                    src='/images/reply.svg'
                    content={'8 Replies'}
                    />
                <CommentSuggest
                    id={3}
                    isleader={true}
                    content={'View more comments'}
                    />
            </div>
        )
    }
}

export default GroupComment
