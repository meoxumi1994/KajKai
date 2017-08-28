import React from 'react'

import CommentSuggest from '~/containers/entity/CommentSuggest'
import LeaderComment from '~/containers/entity/LeaderComment'
import CallComment from '~/containers/entity/CallComment'

class GroupComment extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.onJoin()
        // console.log(this[this.props.focuscommentid].getBo)
        // window.scrollTo(document.getElementById(this.props.focuscommentid))
        // document.getElementById(this.props.focuscommentid).focus();
        // setTimeout(() => {
        //     if(this[this.props.focuscommentid]){
        //         console.log('focuscommentid', this.props.focuscommentid)
        //         console.log(this[this.props.focuscommentid])
        //         this[this.props.focuscommentid].focus()
        //     }
        // }, 2000)
    }
    componentWillUnmount(){
        this.props.onLeave()
    }
    render(){
        const { WRITE_COMMENT_OR_ORDER, WRITE_COMMENT, CLOSE_STORE_DESCRIPTION, VIEW_MORE, COMMENTS,
            numleadercomment , leadercomments, content, onChange, id, stateComment,
            onEnter, avatarUrl, onGetMore, offset, order, userid, closeComment } = this.props
        return(
            <div style={{ padding: '10px 0px 0px 0px' }}>
                {(offset != -2 && numleadercomment > leadercomments.length) &&
                    <CommentSuggest
                        id={3}
                        stateComment={stateComment}
                        isleader={true}
                        onClick={() => onGetMore()}
                        content={ VIEW_MORE + ' ' + (numleadercomment - leadercomments.length) + ' ' + COMMENTS }
                        end={leadercomments.length + ' of '+numleadercomment}
                        />
                }
                {leadercomments.map((item, index) =>
                    <div key={item.id + index} id={item.id}
                        ref={ leadercomment => {
                            // console.log(item.id, index);
                            this[item.id] = leadercomment }}
                        >
                        <LeaderComment id={item.id}/>
                    </div>

                )}
                {(userid && !closeComment ) &&
                    <CallComment key={id}
                        order={this.props.order}
                        onEnter={() => {
                            onEnter(this.props.order)
                        }}
                        id={id}
                        handleChange={(e) => onChange('content', e.target.value)}
                        content={content}
                        isleader={true}
                        avatarUrl={avatarUrl}
                        placehoder={WRITE_COMMENT}
                        />
                }
                {(userid && closeComment) &&
                    <div style={{ color: '#53565C', paddingBottom: 10 }}>
                        {CLOSE_STORE_DESCRIPTION}
                    </div>
                }
            </div>
        )
    }
}

export default GroupComment
