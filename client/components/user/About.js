import React from 'react'

class About extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show : false,
        }
    }
    _onClick(){
        this.setState({ show: !this.state.show })
    }
    render(){
        const { username, email, language, address, phone, age , isOwner } = this.props
        return(
            <div style={{
                borderRadius: 4,
                border: '1px solid #CCCCCC',
                boxShadow: '0px 0px 4px #CCCCCC',
                backgroundColor: 'white',
                width: 938, marginTop: 10, marginLeft: -23,
                }}>
                <div
                    className="btn btn-default"
                    onClick={() => this._onClick()}
                    >
                    click me
                </div>
                {this.state.show && 'hihihi'}
                <div style={{ fontSize: 20, padding: 10, backgroundColor: '#F6F7F9'}}>
                    About
                </div>
                <hr style={{ margin: 0, padding: 0 }}/>
                <div style={{ padding: 10 }}>
                    <span style={{ fontWeight: 'bold' }}>User name : </span>
                    <span>{username}</span>
                </div>
                <hr style={{ margin: 0, padding: 0 }}/>
                <div style={{ padding: 10 }}>
                    <span style={{ fontWeight: 'bold' }}>Email : </span>
                    <span>{email}</span>
                </div>
                <hr style={{ margin: 0, padding: 0 }}/>
                <div style={{ padding: 10 }}>
                    <span style={{ fontWeight: 'bold' }}>Language : </span>
                    <span>{(language == 'en')? 'english' : 'vietnam'}</span>
                </div>
                <hr style={{ margin: 0, padding: 0 }}/>
                <div style={{ padding: 10 }}>
                    <span style={{ fontWeight: 'bold' }}>Address : </span>
                    <span>{address}</span>
                </div>
                <hr style={{ margin: 0, padding: 0 }}/>
                {isOwner &&
                    <div>
                        <div style={{ padding: 10 }}>
                            <span style={{ fontWeight: 'bold' }}>Phone : </span>
                            <span>{phone}</span>
                        </div>
                        <hr style={{ margin: 0, padding: 0 }}/>
                    </div>
                }
                <div style={{ padding: 10 }}>
                    <span style={{ fontWeight: 'bold' }}>Age : </span>
                    <span>{age}</span>
                </div>
                <hr style={{ margin: 0, padding: 0 }}/>
            </div>
        )
    }
}
export default About
