import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'

class Product extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { id, list, detail } = this.props
        return(
            <tr>
                {list.map((item,index) =>
                    <td style={{ paddingRight: 10, fontSize: 13.5 }} key={index}>
                        {item}
                    </td>
                )}
                <td style={{ paddingRight: 10 }}>
                    <div className="btn" style={{ padding: 0 }}>
                        <img width={15} src="/images/plus.svg"/>
                    </div>
                </td>
                <td>
                    <OverlayTrigger placement="right" overlay={(
                        <Popover id="popover-positioned-bottom" title={list[0]}>
                            {list.map((item,index) => {
                                if(index) return (<div key={index}>{item}</div>)
                                return undefined
                            })}
                            <img src={detail.image} alt="Cinque Terre" width="200" height="200"/>
                        </Popover>
                    )}>
                        <img width={15} height={15} src={detail.image} />
                    </OverlayTrigger>
                </td>
            </tr>
        )
    }
}

export default Product
