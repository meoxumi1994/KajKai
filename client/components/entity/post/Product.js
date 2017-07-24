import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'

import ContentEditable from '~/components/entity/ContentEditable'
import ContentShow from '~/components/entity/ContentShow'

class Product extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { id, list, imageUrl, content, canEdit, onChange, width, onAddProduct, canRemove, onRemoveProduct} = this.props
        return(
            <tr>
                {list.map((item,index) => {
                    if(!canEdit){
                        return (
                            <td style={{ paddingRight: 10, fontSize: 13.5 }} key={index}>
                                <ContentShow
                                    fontSize={13.5}
                                    heightEachRow={16}
                                    content={item}
                                    handleChange={(e) => this.setState({ })}
                                />
                            </td>
                        )
                    }else{
                        return (
                            <td style={{ paddingRight: 10 }} key={index}>
                                <div>
                                    <ContentEditable
                                        canEdit={true}
                                        placehoder={" "}
                                        handleChange={(e) => {
                                            const newlist = [...list]
                                            newlist[index] = e.target.value
                                            onChange('list', newlist)
                                        }}
                                        minRows={1}
                                        content={item}
                                        width={width}
                                        padding={0}
                                    />
                                </div>
                            </td>
                        )
                    }
                })}
                <td style={{ paddingRight: 10 }}>
                    {canRemove ?
                        <div className="btn" style={{ padding: 0 }}
                            onClick={() => onRemoveProduct()}>
                            <img width={15} src="/images/minus.svg"/>
                        </div>
                    :   <div className="btn" style={{ padding: 0 }}
                            onClick={() => onAddProduct()}>
                            <img width={15} src="/images/plus.svg"/>
                        </div>
                    }
                </td>
                <td>
                    {!canEdit ?
                        <OverlayTrigger placement="right" overlay={(
                            <Popover id="popover-positioned-bottom" title={list[0]}>
                                {list.map((item,index) => {
                                    if(index) return (<div key={index}>{item}</div>)
                                    return undefined
                                })}
                                <img src={imageUrl} alt="Cinque Terre" width="200" height="200"/>
                            </Popover>
                        )}>
                            <img width={15} height={15} src={imageUrl} />
                        </OverlayTrigger>
                    :   <div className="btn" style={{ padding: 0 }}>
                            <img width={15} src={imageUrl? imageUrl: '/images/plusimage.svg'} />
                        </div>
                    }
                </td>
            </tr>
        )
    }
}

export default Product
