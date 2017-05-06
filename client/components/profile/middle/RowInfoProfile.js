import React from 'react';

class RowBigProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            newvalue: props.value || ''
        }
    }
    handleChange(e){
        console.log(e.target.value)
        this.setState({
            newvalue: e.target.value
        })
    }
    render(){
        let { g, title, noteContent, onSaveChange, onCancel, updateuser, validate } = this.props;
        return(
            <div style={{ backgroundColor: '#F2F2F2'}}>
                <div style={{  paddingTop: 5, paddingBottom: 5, paddingRight: 14 }}>
                    <a href="#" style={{ float: 'right', marginTop: 3, marginRight: -7 }}
                        onClick={() => onCancel()}>cancel</a>
                    <div style={{ width: '100%' }}>
                        <div style={{ width: 145, marginLeft: 13,  float: 'left'}}>
                            <h5>{title}</h5>
                        </div>
                        <div style= {{ marginLeft: 158 }}>
                            <div style={{ width: '100%'}}>
                                <input type="text" className="form-control input-sm"
                                    style={{ width: 300 }} value={this.state.newvalue}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div>
                                {/* { validate(this.state.newvalue) && '123123'} */}
                            </div>
                            <div style={{ marginTop: 5, marginBottom: 5 }}>
                                {g('NOTE')}{": "}
                                <small>{noteContent}</small>
                            </div>
                            <div style={{ marginTop: 5}}>
                                { updateuser == 'UPDATE_USER_ING'
                                    ?<div className="loader-small" style={{ marginLeft: 40 }}></div>
                                    :<div className="btn btn-default btn-xs"
                                        onClick={() => onSaveChange(this.state.newvalue)}>{g('SAVE_CHANGE')}</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ margin: 0}}></hr>
            </div>
        )
    }
}

const RowSmallProfile = ({ onEdit, title, value, g, itemId }) => {
    return(
        <div>
            <div style={{ paddingTop: 8, paddingBottom: 8, paddingRight: 14 }}>
                <a href="#" style={{ float: 'right', marginRight: -7 }}
                    onClick={() => onEdit()}>edit</a>
                <div style={{  width: 'calc(100% - 24px)' }}>
                    <div style={{ width: 145, marginLeft: 13,  float: 'left'}}>
                        {title}
                    </div>
                    <div style= {{ padding: 2, marginLeft: 158, color: (value)?'#555555':'#AAAAAA', fontSize: 13}}>
                        { value || g('NO')+' '+title+'.' }
                    </div>
                </div>
            </div>
            <hr style={{ margin: 0}}></hr>
        </div>
    )
}

class RowInfoProfile extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let { open, itemId } = this.props
        if(this.props.open[itemId])
            return <RowBigProfile {...this.props}/>
        else
            return <RowSmallProfile {...this.props}/>
    }
}

export default RowInfoProfile
