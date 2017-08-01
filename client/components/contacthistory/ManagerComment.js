import React from 'react'

class Cell extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { name, avatarUrl, hasCaret, width, onChange } = this.props
        return(
            <div style={{ paddingTop: 5 }}>
                <div className="btn"
                    onMouseOver={() => this.setState({ hover: true })}
                    onMouseLeave={() => this.setState({ hover: false })}
                    onClick={() => {
                        onChange('currentAvatar', avatarUrl)
                        onChange('currentName', name)
                    }}
                    style={{
                        textAlign: 'left',
                        display: 'inline-block',
                        borderRadius: 0,
                        borderTop: this.state.hover?'1px solid #282828':'1px solid white',
                        borderBottom: this.state.hover?'1px solid #282828':'1px solid white',
                        backgroundColor: this.state.hover?'#3B5998':'white',
                        color: this.state.hover?'white':'black',
                        margin: 0, padding: 0, marginLeft: 5, marginRight: 5, width: width }}>
                    <img width={20} height={20} src={avatarUrl}/>
                    <span style={{ marginLeft: 5, fontSize: 12.5 }}>{name}</span>
                </div>
            </div>
        )
    }
}

class Cell2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { name, onChange } = this.props
        return(
            <div>
                <div className="btn"
                    onMouseOver={() => this.setState({ hover: true })}
                    onMouseLeave={() => this.setState({ hover: false })}
                    onClick={() => {
                        onChange('currentType', name)
                    }}
                    style={{
                        textAlign: 'left',
                        display: 'inline-block',
                        borderRadius: 0,
                        borderTop: this.state.hover?'1px solid #282828':'1px solid white',
                        borderBottom: this.state.hover?'1px solid #282828':'1px solid white',
                        backgroundColor: this.state.hover?'#3B5998':'white',
                        color: this.state.hover?'white':'black',
                        margin: 0, padding: 0, width: 80 }}>
                    <span style={{ marginLeft: 5, fontSize: 12.5 }}>{name}</span>
                </div>
            </div>
        )
    }
}

class ManagerComment extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { storeList, current, currentAvatar, currentName, currentType, avatarUrl, username, onChange } = this.props
        return(
            <div style={{ height: '100%',}}>
                <div style={{ padding: 5, backgroundColor: '#E9EBEE'}}>
                    <div className="input-group-btn" style={{ padding: 0, margin: 0 }}>
                      <div className="btn btn-default btn-xs dropdown-toggle"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                          style={{
                              textAlign: 'left',
                              display: 'inline-block',
                              borderRadius: 0,
                              margin: 0, padding: 0, marginLeft: 5, marginRight: 5, width: 150 }}>
                          <img width={20} height={20} src={currentAvatar}/>
                          <span style={{ marginLeft: 5, fontSize: 12.5 }}>{currentName}</span>
                          <span style={{
                              float: 'right',
                              marginLeft: 5, marginTop: 8, marginRight: 5, fontSize: 12.5 }} className="caret"></span>
                      </div>
                      <ul className="dropdown-menu" style={{
                          margin: 0, marginTop: 5, padding: '0px 0px 5px 0px',
                          borderRadius: 0, }}>
                            <li>
                                <Cell name={username} avatarUrl={avatarUrl} width={150} onChange={onChange}/>
                            </li>
                            {storeList.map((item) =>
                                <li key={item.id}>
                                    <Cell name={item.storename} avatarUrl={item.avatarUrl} width={150} onChange={onChange}/>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="input-group-btn" style={{ padding: 0, margin: 0,}}>
                      <div className="btn btn-default btn-xs dropdown-toggle"
                          style={{
                              textAlign: 'left',
                              display: 'inline-block',
                              borderRadius: 0,
                              margin: 0, padding: 1, width: 80 }}
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span style={{
                              float: 'right', marginTop: 8, marginRight: 5, fontSize: 12.5 }} className="caret"></span>
                          <span style={{ marginLeft: 5, fontSize: 12.5 }}>{currentType}</span>
                      </div>
                      <ul className="dropdown-menu" style={{ padding: '5px 0px 5px 0px',
                      margin: 0, marginTop: 5,
                      borderRadius: 0, }}>
                        <li>
                            <Cell2 name={'New'} onChange={onChange}/>
                        </li>
                        <li>
                            <Cell2 name={'Received'} onChange={onChange}/>
                        </li>
                        <li>
                            <Cell2 name={'Done'} onChange={onChange}/>
                        </li>
                      </ul>
                    </div>
                </div>
                <hr style={{ margin: 0}}/>
            </div>
        )
    }
}

export default ManagerComment
