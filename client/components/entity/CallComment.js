import React from 'react'

import ContentEditable from '~/components/entity/ContentEditable'
import Product from '~/containers/entity/post/Product'

class CallComment extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { isleader, avatarUrl, placehoder, id, handleChange, content, onEnter, order } = this.props
        return(
            <div style={{ paddingBottom: 10 }}>
                <div style={{
                    marginLeft: isleader?0:38,
                    paddingLeft: isleader?0:10,
                    borderLeft: isleader?undefined:'2px solid #4080FF',
                }}>
                    <img src={avatarUrl} style={{
                        width: isleader?40:20,
                        height: isleader?40:20,
                    }}/>
                    <div style={{
                        marginTop: isleader?-40:-20,
                        marginLeft: isleader?50:30,
                    }}>
                        <table>
                            {order && order.map((item,index) => {
                                return (
                                    <tbody key={item.id+index} style={{ marginBottom: 5 }}>
                                        <Product id={item.id} sellpostId={id} index={index}
                                            canRemove={true} width={index?120:160}/>
                                    </tbody>
                                )
                            })}
                        </table>
                        <div style={{ height: 10 }}></div>
                        <ContentEditable
                            onEnter={() => onEnter()}
                            placehoder={placehoder}
                            handleChange={(e) => handleChange(e)}
                            content={content}
                            padding={isleader?5:0}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CallComment
