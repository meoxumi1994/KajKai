import React from 'react'
import { Link } from 'react-router-dom'

class StoreOverview extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { avatarUrl, address, storename, firstCategory, secondCategory, urlname, numfollow, numlike, category, phone,
            FOLLOW, LIKE, BY, PEOPLE } = this.props
        if(!urlname) return <div></div>
        return(
            <Link to={"/"+urlname}>
                <div className="btn" style={{ display: 'inline-block', textAlign: 'left', padding: 0, borderRadius: 0,
                    height: 100, backgroundColor: 'white', width: '100%'}}>
                    <div>
                        <img src={avatarUrl} style={{ width: 100, height: 100 }}/>
                    </div>
                    <div style={{ marginTop: -100, marginLeft: 110}}>
                        <div style={{ marginTop: 5, marginBottom: 2, fontSize: 15, fontWeight: 600 }}>
                            {storename}
                            <span style={{ color: '#BD081C' }}>{" ("}{category}{")"}</span>
                            <span style={{ fontSize: 12.5, color: '#ADB0B6', fontWeight: 'normal'}}>{" . "}{urlname}</span>
                        </div>
                        <div style={{ fontSize: 14, color: '#4B4F56'}}>{address}</div>
                        <div style={{ fontSize: 12.5, color: '#ADB0B6'}}>
                            {firstCategory}{" . "}{secondCategory}
                        </div>
                        <div style={{ fontSize: 12.5, color: '#ADB0B6'}}>
                            {FOLLOW}{" "}{BY}{" "}{numfollow}{" "}{PEOPLE}{" . "}
                            {LIKE}{" "}{BY}{" "}{numlike}{" "}{PEOPLE}
                            {" . "}{phone}
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
    componentDidMount(){
        this.props.onGetStore()
    }
}

export default StoreOverview
