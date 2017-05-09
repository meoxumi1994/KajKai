import React from 'react';

class RowBigProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            newvalue: props.value || ''
        }
    }
    handleChange(e){
        this.setState({
            newvalue: e.target.value
        })
    }
    render(){
        const { g, title, noteContent, onSaveChange, onCancel, isLoading, validatetop, validatebot, warning } = this.props
        const validationtop = validatetop(this.state.newvalue)
        const validationbot = validatebot(this.state.newvalue)
        return(
            <div style={{ backgroundColor: '#F2F2F2'}}>
                <div style={{  paddingTop: 5, paddingBottom: 5, paddingRight: 14 }}>
                    <a href="#" style={{ float: 'right', marginTop: 3, marginRight: -7 }}
                        onClick={() => onCancel()}>cancel</a>
                    <div style={{ width: '100%' }}>
                        <div style={{ width: 145, marginLeft: 13,  float: 'left'}}>
                            <h5>{g(title)}</h5>
                        </div>
                        <div style= {{ marginLeft: 158 }}>
                            <div className={"form-group" + (validationtop ?" has-error":"")}
                                style={{ width: '100%', color: 'red'}}>
                                <input type="text" className="form-control input-sm"
                                    style={{ width: 300 }} value={this.state.newvalue}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <div className="help-block">
                                    { validationtop && g(title+'_WARNING')}
                                </div>
                            </div>
                            <div style={{ marginTop: 5, marginBottom: 5 }}>
                                {g('NOTE')}{": "}
                                <small>{g('NOTE_'+title)}</small>
                            </div>
                            <div style={{ marginTop: 5}} >
                                { isLoading
                                    ?<div className="loader-small" style={{ marginLeft: 40 }}></div>
                                    : validationbot? <div className="btn btn-default btn-xs" disabled>{g('SAVE_CHANGE')}</div>
                                    : <div className="btn btn-default btn-xs"
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
                        {g(title)}
                    </div>
                    <div style= {{ padding: 2, marginLeft: 158, color: (value)?'#555555':'#AAAAAA', fontSize: 13}}>
                        { value || g('NO')+' '+g(title)+'.' }
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
