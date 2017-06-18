import React from 'react'

import BasicInput from '~/containers/entity/input/BasicInput'

class PostRow extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { id, data, onedit } = this.props
        const Row = () => {
            switch (data.type) {
                case 'title':
                    return(
                        <div style={{ padding: '5px 8px 0px 8px' }}>
                            <BasicInput id={id} fontSize={17} onedit={onedit}/>
                        </div>
                    )
                case 'normal':
                    return(
                        <div style={{ padding: '5px 8px 0px 8px' }}>
                            <BasicInput id={id} fontSize={14} onedit={onedit}/>
                        </div>
                    )
                case 'imagetext':
                    return(
                        <div style={{ minHeight: 250 }}>
                            <img src='/images/avatardefault.png' style={{ float: 'right', width: 250, height: 250 }}/>
                            <div style={{ marginRight: 250, padding: '5px 8px 0px 8px'}}>
                                <BasicInput id={id} minRows={12} onedit={onedit}/>
                            </div>
                        </div>
                    )
                case 'textimage':
                    return(
                        <div style={{ minHeight: 250 }}>
                            <img src='/images/avatardefault.png' style={{ float: 'right', width: 250, height: 250 }}/>
                            <div style={{ marginRight: 250, padding: '5px 8px 0px 8px'}}>
                                <BasicInput id={id} minRows={12} onedit={onedit}/>
                            </div>
                        </div>
                    )
                case 'groupimages':
                    return(
                        <div style={{ width: 515 }}>
                            <img src='/images/default.png'
                            style={{ position: 'relative', padding: '5px 0px 5px 5px', width: 250, height: 250, display: 'inline' }}/>
                            <img src='/images/default.png'
                            style={{ position: 'absolute', padding: '5px 0px 5px 5px', width: 250, height: 250 }}/>
                        </div>
                    )
                default:
                    return <div></div>
            }
        }

        return <Row/>
    }
}

export default PostRow
