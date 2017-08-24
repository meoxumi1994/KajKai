import React from 'react'

class CommentSuggest extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hover: false
        }
    }
    render(){
        const { isleader, src, imgsrc, numreplys, content, onClick, time, end} = this.props
        return(
            <div>
                <div style={{ marginTop: 3, marginRight: 10, color: '#91959D',
                    fontSize: 12.5, float: 'right'}}>
                    {end}
                </div>
                <div onClick={() => onClick()}
                    style={{
                    marginLeft: isleader?0:38,
                    paddingBottom: 10,
                    borderLeft: isleader?undefined:'2px solid #4080FF'}}>
                    {!isleader &&
                        <div className="btn" style={{
                            marginLeft: 10,
                            padding: 0,
                            width: 30,
                            fontSize: 12.5 }}>
                            {src && <img src={src} width={10} height={10}/>}
                        </div>
                    }
                    {imgsrc && <img src={imgsrc} width={20} height={20}
                        style={{ marginRight: 8 }}/>}
                    <div className="btn" style={{
                        marginLeft: isleader?-1:-1,
                        padding: 0,
                        fontSize: 12.5 }}>
                        <a style={{ marginLeft: 0 }}>
                            {content && <span style={{ color: '#365899' }}>{content}</span>}
                        </a>
                        {time && " . "}
                        {time && <span style={{ color: '#91959D' }}>{time}</span>}
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentSuggest
