import React from 'react'

import VerifyPhone from '~/containers/entity/phone/VerifyPhone'
import ShowInMap from '~/containers/entity/map/ShowInMap'

const checkPhone = (phone) => {
    if(!phone) return 'error'
    const isphone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(phone)
    if( !isphone ) return 'error'
    return null
}

class SettingCell extends React.Component {
    constructor(props){
        super(props)
        this.state = { isEdit: false, value: '' }
    }
    componentDidMount(){
        this.setState({ value: this.props.value })
    }
    render(){
        const { title, description, onVerify, EDIT, SAVE, CONFIRM, kind, openModalPhone } = this.props
        return(
            <div className="panel panel-default" style={{ margin: 0, marginLeft: -23, marginTop: 10, }}>
                <div style={{ padding: 10, fontSize: 18, backgroundColor: '#F6F7F9'}}>
                    {title}
                </div>
                <hr style={{ margin : 0 }}/>
                <div>
                    {description &&
                        <div style={{ padding: 10, color: '#9B9B9B'}}>
                            {description}
                        </div>
                    }
                    {kind == 'position' ?
                        <div style={{ padding: 10 }}>
                            <ShowInMap position={this.state.value} width={918} height={500}
                                    onChangePosition={(value) => {
                                        this.setState({ value: value })
                                        this.props.onUpdate(value)
                                    }}
                                    canEdit={true}/>
                        </div>
                    : kind == 'phone' ?
                        <div style={{ padding: 10 }}>
                            <div className="btn btn-default btn-sm"
                                disabled={checkPhone(this.state.value)}
                                style={{ float: 'right', marginRight: 10 }}
                                onClick={() => {
                                        this.setState({ isEdit: !this.state.isEdit })
                                        if(this.state.isEdit){
                                            this.props.updatePhone(this.state.value)
                                            this.props.onChange('openModalPhone', true )
                                            // this.props.onUpdate(this.state.value)
                                        }
                                    }
                                }>
                                {this.state.isEdit ? CONFIRM : EDIT}
                            </div>
                            {this.state.isEdit ?
                                <input className="form-control input-sm"
                                    style={{ width: '80%', fontSize: 13.5, marginTop: 1 }}
                                    value={this.state.value}
                                    onChange={(e) => this.setState({ value: e.target.value })}/>
                            :   <div style={{ padding: 6,  fontSize: 13.5 }}>
                                    {this.state.value}
                                </div>
                            }
                            <VerifyPhone
                                phone={this.state.value}
                                showModal={openModalPhone}
                                close={() => this.props.onChange('openModalPhone', false )}/>
                            {/* {this.state.isEdit ?
                                <input className="form-control input-sm"
                                    style={{ width: '80%', fontSize: 13.5, marginTop: 1 }}
                                    value={this.state.value}
                                    onChange={(e) => this.setState({ value: e.target.value })}/>
                            :   <div style={{ padding: 6,  fontSize: 13.5 }}>
                                    {this.state.value}
                                </div>
                            } */}
                        </div>
                    :   <div style={{ padding: 10 }}>
                            <div className="btn btn-default btn-sm" style={{ float: 'right', marginRight: 10 }}
                                onClick={() => {
                                        this.setState({ isEdit: !this.state.isEdit })
                                        if(this.state.isEdit)
                                            this.props.onUpdate(this.state.value)
                                    }
                                }>
                                {this.state.isEdit ? SAVE : EDIT}
                            </div>
                            {this.state.isEdit ?
                                <input className="form-control input-sm"
                                    style={{ width: '80%', fontSize: 13.5, marginTop: 1 }}
                                    value={this.state.value}
                                    onChange={(e) => this.setState({ value: e.target.value })}/>
                            :   <div style={{ padding: 6,  fontSize: 13.5 }}>
                                    {this.state.value}
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default SettingCell
