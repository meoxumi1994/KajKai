import React from 'react'

const LikeShareComment = ({ onLike, typeLikes, onComment, onShare, beLike }) => {
    return(
        <div className="container-fluid" style={{
            width: 265,
            marginLeft: 0,
        }}>
            <div className="row">
                <div className="col col-xs-4" style={{ padding: 0, margin: 0 }}>
                    <div className="btn" style={{ padding: 0, width: 62 }}
                        onClick={() => {
                            if(!beLike){
                                this.like.className = "grow growing"
                                setTimeout(() => {
                                    this.like.className = "grow"
                                }, 170)
                            }
                            this.liketext.className = "decline declineing"
                            setTimeout(() => {
                                this.liketext.className = "decline"
                            }, 80)
                            onLike()
                        }}>
                        <img ref={img=> this.like = img}
                            style={{
                                float: 'left',
                                width: 15,
                                height: 15,
                            }} src={beLike?"/images/likehas.svg":"/images/like.svg"}
                        />
                        <div ref={ liketext => this.liketext = liketext}
                            style={{
                            marginTop: -2,
                        }}><a style={{
                            color: beLike?'#4673CC': '#3C3F45',
                            fontSize: 13,
                            fontWeight: 'bold',
                        }}>{'Like'}</a>
                        </div>
                    </div>
                </div>
                <div className="col col-xs-4" style={{ padding: 0, margin: 0 }}>
                    <div className="btn" style={{ marginLeft: -6, padding: 0, width: 97 }}
                        ref={img => this.cmt = img}
                        onClick={() => {
                            this.cmt.className = "btn decline declineing"
                            setTimeout(() => {
                                this.cmt.className = "btn decline"
                            }, 80)
                            onComment()
                        }}>
                        <img
                            style={{
                                float: 'left',
                                width: 15,
                                height: 15,
                            }} src="/images/comment.svg"
                        />
                        <div style={{
                            marginTop: -2,
                        }}><a style={{
                            color: '#3C3F45',
                            fontSize: 13,
                            fontWeight: 'bold',
                        }}>{'Comment'}</a>
                        </div>
                    </div>
                </div>
                <div className="col col-xs-4" style={{ padding: 0, margin: 0 }}>
                    <div className="btn" style={{ marginLeft: 19, padding: 0, width: 72}}
                        onClick={() => onShare()}
                        ref={img => this.share = img}
                        onClick={() => {
                            this.share.className = "btn decline declineing"
                            setTimeout(() => {
                                this.share.className = "btn decline"
                            }, 80)
                            onShare()
                        }}
                        >
                        <img
                            style={{
                                float: 'left',
                                width: 15,
                                height: 15,
                            }} src={"/images/share.svg"}
                        />
                        <div style={{
                            marginTop: -2,
                        }}><a style={{
                            color: '#3C3F45',
                            fontSize: 13,
                            fontWeight: 'bold',
                        }}>{'Share'}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LikeShareComment
