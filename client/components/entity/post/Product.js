import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'

import ContentEditable from '~/components/entity/ContentEditable'
import ContentShow from '~/components/entity/ContentShow'
import ProductModal from '~/containers/entity/modal/ProductModal'

class Product extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { id, list, imageUrl, content, isOverLayLeft, num,
            canEdit, onChange, width, onAddProduct, justShow, canRemove, REMOVE,
            onRemoveProduct, ShowNum } = this.props
        return(
            <tr>
                {list.map((item,index) => {
                    if(!canEdit){
                        return (
                            <td style={{ paddingRight: 10, fontSize: 13.5 }} key={index}>
                                <div style={{ marginTop: 3 }}>
                                    <ContentShow
                                        fontSize={13.5}
                                        heightEachRow={16}
                                        content={item}
                                        handleChange={(e) => this.setState({ })}
                                    />
                                </div>
                            </td>
                        )
                    }else{
                        return (
                            <td style={{ paddingRight: 10 }} key={index}>
                                <div>
                                    <ContentEditable
                                        handleChange={(e) => {
                                           const newlist = [...list]
                                           newlist[index] = e.target.value
                                           onChange('list', newlist)
                                       }}
                                        placehoder={" "}
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
                {!justShow &&
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
                }
                <td>
                    {!canEdit ?
                        <OverlayTrigger placement={isOverLayLeft ? "left" : "right" } style={{ padding: 10 }} overlay={(
                            <Popover id="popover-positioned-bottom" title={list[0]}>
                                {list.map((item,index) => {
                                    if(index) return (<div key={index}>{item}</div>)
                                    return undefined
                                })}
                                <div style={{ paddingBottom: 5, }}>
                                    <ContentShow
                                        fontSize={13.5}
                                        heightEachRow={16}
                                        content={content}
                                    />
                                </div>
                                <img src={imageUrl} alt="Cinque Terre" width="200" height="200"/>
                            </Popover>
                        )}>
                            <img width={15} height={15} src={imageUrl} />
                        </OverlayTrigger>
                    :   <div className="btn" style={{ padding: 0 }}
                            onClick={() => this.setState({ showEditModal: true })}>
                            <img width={15} src={imageUrl? imageUrl: '/images/plusimage.svg'} />
                            <ProductModal
                                id={id}
                                showModal={this.state.showEditModal}
                                close={() => this.setState({ showEditModal: false })}
                                imageUrl={imageUrl}
                                content={content}
                                list={list}
                                onChange={(key, value) => onChange(key, value)}
                            />
                        </div>
                    }
                </td>

                {canEdit &&
                    <td>
                        <div className="btn" style={{ marginLeft: 5, padding: 0, fontSize: 12.5 }}
                            onClick={() => {
                                this.props.onRemoveProductEdit()}
                            }>
                            <a>{REMOVE}</a>
                        </div>
                    </td>
                }
                {ShowNum &&
                    <td>
                        <div style={{ marginLeft: 10, fontSize: 12, marginTop: 4 }}>{"x"}&nbsp;{num}</div>
                    </td>
                }
            </tr>
        )
    }
}

export default Product
