import React from 'react'

import ContentEditable from '~/components/entity/ContentEditable'
import Product from '~/containers/entity/post/Product'

class CallComment extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { isleader, avatarUrl, placehoder, id, handleChange, content, onEnter, order, match } = this.props
        return(
            <div>
                <div style={{
                    marginLeft: isleader?0:38,
                    paddingLeft: isleader?0:10,
                    borderLeft: isleader?undefined:'2px solid #4080FF',
                }}>
                    <img src={avatarUrl} style={{
                        width: isleader?35:20,
                        height: isleader?35:20,
                    }}/>
                    <div style={{
                        marginTop: isleader?-44:-20,
                        marginLeft: isleader?45:30,
                    }}>
                        {order && <div style={{ height: 10 }}></div>}
                        {(order && order.length > 0 ) &&
                            <table style={{ marginTop: -5, marginBottom: 5 }}>
                                {order && order.map((item,index) => {
                                    return (
                                        <tbody key={item.id+index} style={{ marginBottom: 5 }}>
                                            <Product id={item.id} sellpostId={id} index={index} ShowNum={true} num={item.num}
                                                canRemove={true} width={index?300:300}/>
                                        </tbody>
                                    )
                                })}
                            </table>
                        }
                        <ContentEditable
                            // width={}
                            match={match}
                            onEnter={() => onEnter()}
                            placehoder={placehoder}
                            handleChange={(e) => handleChange(e)}
                            content={content}
                            padding={isleader?7:0}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CallComment
