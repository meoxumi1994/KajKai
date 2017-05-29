import React from 'react'

import BasicInput from '~/containers/entity/input/BasicInput'
import ShowTextArea from '~/containers/entity/show/ShowTextArea'

class MainPostRow extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { id, data } = this.props
        const Row = () => {
            switch (data.type) {
                case 'title':
                    return(
                        <div style={{ padding: '5px 8px 0px 8px' }}>
                            <BasicInput id={id} fontSize={17} />
                        </div>
                    )
                case 'normal':
                    return(
                        <div style={{ padding: '5px 8px 0px 8px' }}>
                            <BasicInput id={id} fontSize={14} />
                        </div>
                    )
                case 'imagetext':
                    return(
                        <div>
                            <img src='./images/avatardefault.png' style={{ float: 'right', width: 250, height: 250 }}/>
                            <div style={{ marginRight: 250, padding: '5px 8px 0px 8px'}}>
                                <BasicInput id={id} minRows={12}/>
                            </div>
                        </div>
                    )
                case 'textimage':
                    return(
                        <div>
                            <img src='./images/avatardefault.png' style={{ float: 'right', width: 250, height: 250 }}/>
                            <div style={{ marginRight: 250, padding: '5px 8px 0px 8px'}}>
                                <BasicInput id={id} minRows={12}/>
                            </div>
                        </div>
                    )
                case 'groupimages':
                    return(
                        <div style={{ width: 515 }}>
                            <img src='./images/default.png'
                            style={{ position: 'relative', padding: '5px 0px 5px 5px', width: 250, height: 250, display: 'inline' }}/>
                            <img src='./images/default.png'
                            style={{ position: 'absolute', padding: '5px 0px 5px 5px', width: 250, height: 250 }}/>
                        </div>
                    )
                default:
                    return <div></div>
            }
        }
        return <Row/>
    }
    componentDidUpdate(){
        const { data, onCreate } = this.props
        onCreate(data)
    }
}

export default MainPostRow
