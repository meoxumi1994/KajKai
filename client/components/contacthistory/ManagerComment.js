import React from 'react'

import LeaderComment from '~/containers/entity/contact/LeaderComment'

const getString = (str) => {
    if(str == undefined) return ""
    let newstr = ""
    str.split('\n').map((item) => newstr += item)
    return newstr.substr(0,15)
}

class Cell extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { name, id, avatarUrl, width, onChange, onGetContact } = this.props
        return(
            <div style={{ paddingTop: 5 }}>
                <div className="btn"
                    onMouseOver={() => this.setState({ hover: true })}
                    onMouseLeave={() => this.setState({ hover: false })}
                    onClick={() => {
                        onChange('currentId', id)
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
                    <span style={{ marginLeft: 5, fontSize: 12.5 }}>{getString(name)}</span>
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
        const { currentId, avatar, name, state, onGetContact, onChange, leadercomments } = this.props
        let contact = []
        for(let i in this.props.contact){
            contact = [...contact,
                this.props.contact[i]
            ]
        }
        if(contact.length==0 || !name)
            return <div></div>
        return(
            <div style={{ height: '100%', backgroundColor: '#E9EBEE' }}>
                <div style={{ padding: 5 }}>
                    <div className="input-group-btn" style={{ padding: 0, margin: 0 }}>
                      <div className="btn btn-default btn-xs dropdown-toggle"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                          style={{
                              textAlign: 'left',
                              display: 'inline-block',
                              borderRadius: 0,
                              margin: 0, padding: 0, marginLeft: 5, marginRight: 5, width: 200 }}>
                          <img width={20} height={20} src={avatar}/>
                          <span style={{ marginLeft: 5, fontSize: 12.5 }}>{getString(name)}</span>
                          <span style={{
                              float: 'right',
                              marginLeft: 5, marginTop: 8, marginRight: 5, fontSize: 12.5 }} className="caret"></span>
                      </div>
                      <ul className="dropdown-menu" style={{
                          margin: 0, marginTop: 5, padding: '0px 0px 5px 0px',
                          borderRadius: 0, }}>
                            {contact.map((item) =>
                                <li key={item.id}>
                                    <Cell name={item.name} avatarUrl={item.avatar} onGetContact={onGetContact}
                                        width={200} onChange={onChange} id={item.id}/>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <hr style={{ margin: 0 }}/>
                <div id="leadercomments"
                    ref={ leadercomments => this.leadercomments = leadercomments }
                    style={{ overflow: 'scroll', height: '87%', backgroundColor: 'white'}}>
                    {leadercomments && leadercomments.slice(0).reverse().map((item, index) => {
                        return(
                            <div key={item.id}>
                                <LeaderComment
                                    id={item.id}
                                    />
                            </div>
                        )
                    })}
                    {(state == 'GET_CONTACT_USER_ING' || state == 'GET_CONTACT_STORE_ING') &&
                        <div style={{ marginTop: 20, marginBottom: 20 }} id="loaderr"></div>
                    }
                </div>
                <hr style={{ margin: 0 }}/>
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState){
        const { type, offset, id, state, currentId } = nextProps
        if(nextProps.currentId != this.props.currentId)
            this.props.onGetContact(type, offset, id, state)
        return true
    }
    componentDidMount(){
        const { type, offset, id, state } = this.props
        this.props.onGetContact(type, offset, id, state)
        let that = this
        $('#leadercomments').on('mousewheel DOMMouseScroll', function(e) {
            if(that.leadercomments.scrollTop + that.leadercomments.clientHeight > that.leadercomments.scrollHeight - 300 ){
                const { type, offset, id, state } = that.props
                that.props.onGetContact(type, offset, id, state)
            }
            var scrollTo = null;
            if(e.type === 'mousewheel') {
                scrollTo = (e.originalEvent.wheelDelta * -1);
            }
            else if(e.type === 'DOMMouseScroll') {
                scrollTo = 40 * e.originalEvent.detail;
            }
            scrollTo = scrollTo / 5
            if(scrollTo) {
                e.preventDefault();
                $(this).scrollTop(scrollTo + $(this).scrollTop());
            }
        })
    }
}

export default ManagerComment
