import React from 'react'

class Left extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { isOwner, storeList, STORE, HOME, CREATE_STORE, FOLLOW, username, beFollow, onFollow } = this.props
        return(
            <div>
                {(!isOwner && username) &&
                    <div style={{ marginBottom: 10 }}>
                        <div className="btn btn-default btn-sm"
                            onClick={() => onFollow()}
                            style={{
                                width: 150
                             }}>
                            <img width={14} height={14} style={{ marginBottom: 3 }}
                                src={ beFollow ? "/images/hasfollowstore.svg" : "/images/followstore.svg"  }/>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ fontSize: 13, fontWeight: 'bold',
                                color: beFollow ? '#BD081C' : '#7F7F7F' }}>
                                {FOLLOW}
                            </span>
                        </div>
                    </div>
                }
                <div style={{ paddingBottom: 10 }}>
                    <div style={{ margin: 0, padding: 4, backgroundColor: 'white', borderRadius: 2, width: 150 }}>
                        {STORE}
                    </div>
                </div>
                {storeList.map((item, index) =>
                    <div key={index} style={{ paddingBottom: 10 }}>
                        <a href={"/"+item.urlname}>
                            <div className="btn"
                                style={{
                                    textAlign: 'left',
                                    display: 'inline-block',
                                    margin: 0, padding: 4, backgroundColor: 'white', borderRadius: 2, width: 150 }}>
                                <img width={20} height={20} src={item.avatarUrl}/>
                                {" "}<span>{item.storename }</span>
                            </div>
                        </a>
                    </div>
                )}
                <div style={{ paddingBottom: 10 }}>
                    <div className="btn"
                        style={{
                            textAlign: 'left',
                            display: 'inline-block',
                            margin: 0, padding: 4, backgroundColor: 'white', borderRadius: 2, width: 150 }}>
                        <a href={"/"} style={{ fontSize: 13}}>{HOME}</a>
                    </div>
                </div>
                {username &&
                    <div style={{ paddingBottom: 10 }}>
                        <div className="btn"
                            style={{
                                textAlign: 'left',
                                display: 'inline-block',
                                margin: 0, padding: 4, backgroundColor: 'white', borderRadius: 2, width: 150 }}>
                            <a href={"/registerstore"} style={{ fontSize: 13}}>{CREATE_STORE}</a>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Left
