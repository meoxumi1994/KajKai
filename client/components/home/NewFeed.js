import React from 'react'

import SellPost from '~/containers/entity/post/SellPost'
import Post from '~/containers/entity/post/Post'
import StoreOverview from '~/containers/entity/row/StoreOverview'
import UserOverview from '~/containers/entity/row/UserOverview'

class ShowNewFeed extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { stores, users, sellPosts, kind, type, STORE, USER } = this.props
        if(kind == 'user'){
            if(!users) return <div></div>
            return (
                <div style={{ width: 520, marginLeft: 50,
                    borderRadius: 2.5,
                    border: '1px solid #B2B2B2',
                    boxShadow: '0px 0px 4px #B2B2B2',
                    backgroundColor: 'white'}}>
                    <div style={{ padding: 10 }}>
                        <img src="/images/usericon.svg" width={25} height={25}/>
                        <span style={{ marginLeft: 10, fontSize: 16 , fontWeight: 500 }}>{USER}</span>
                    </div>
                    <hr style={{ margin: 0 }}/>
                    <div style={{ padding: 10 }}>
                        {users.map((item, index) => {
                            return (
                                <div key={item.userId} style={{ paddingTop: index ? 10 : 0 }}>
                                    <UserOverview id={item.userId} />
                                </div>
                            )
                        })}
                    </div>
                    {(type == 'SEARCH_ING') &&
                         <div style={{ marginLeft: 300 }} id="loaderr"></div>
                    }
                </div>
            )
        }
        if(kind == 'store'){
            if(!stores) return <div></div>
            return (
                <div style={{ width: 520, marginLeft: 50,
                    borderRadius: 2.5,
                    border: '1px solid #B2B2B2',
                    boxShadow: '0px 0px 4px #B2B2B2',
                    backgroundColor: 'white'}}>
                    <div style={{ padding: 10 }}>
                        <img src="/images/storeicon.svg" width={25} height={25}/>
                        <span style={{ marginLeft: 10, fontSize: 16 , fontWeight: 500 }}>{STORE}</span>
                    </div>
                    <hr style={{ margin: 0 }}/>
                    <div style={{ padding: 10 }}>
                        {stores.map((item, index) => {
                            return (
                                <div key={item.storeId} style={{ paddingTop: index ? 10 : 0 }}>
                                    <StoreOverview id={item.storeId} />
                                </div>
                            )
                        })}
                    </div>
                    {(type == 'SEARCH_ING') &&
                         <div style={{ marginLeft: 300 }} id="loaderr"></div>
                    }
                </div>
            )
        }
        if(kind == 'category'){
            if(!sellPosts) return <div></div>
            return(
                <div>
                    {sellPosts.map((item,index) => {
                        return(
                            <div key={item.sellPostId} style={{ paddingBottom: 10, marginLeft: -10 }}>
                                <Post sellpostid={item.sellPostId} introduceWidth={300}/>
                            </div>
                        )
                    })}
                    {(type == 'SEARCH_ING') &&
                         <div style={{ marginLeft: 300, padding: 10, }} id="loaderr"></div>
                    }
                </div>
            )
        }
        return <div></div>
    }
}


class NewFeed extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.scrollTop, this.props.height, this.inside.scrollHeight)
        if(this.props.scrollTop + this.props.height > this.inside.scrollHeight - 1000){
             this.props.onGetMore();
        }
    }
    componentDidUpdate(){
        console.log(this.props.scrollTop, this.props.height, this.inside.scrollHeight)
        if(this.props.scrollTop + this.props.height > this.inside.scrollHeight - 1000){
             this.props.onGetMore();
        }
    }
    render(){
        const { height, scrollTop } = this.props
        return (
            <div style={{ marginLeft: -40 }}>
                <div ref={ inside => this.inside = inside }>
                    <ShowNewFeed {...this.props}/>
                </div>
            </div>
        )
    }
}

export default NewFeed
