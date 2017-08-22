import React from 'react'

// import ContentShow from '~/components/entity/ContentShow'

const getString =  (str) => {
    let newstr = ""
    str.split('\n').map((item) => newstr += item)
    return newstr.substr(0,50) + ((newstr.length > 50)?'...':'')
}

class PopUpUpdate extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { id, status, kind, type, value, popuptime, onChange } = this.props
        if(popuptime <= 0 || type =='currentId' || type == 'avatarUrl' || type == 'coverUrl' || type == 'language' || type == 'id')
            return <div></div>
        return(
            <div style={{
                position: 'fixed',
                zIndex: 100,
                bottom: 30,
                marginLeft: 500,
                padding: 0,
                animationName: 'closepopup',
                animationDuration: '1.8s',
                animationDelay: '1.2s',
                borderRadius: 2.5,
                border: '1px solid #B2B2B2',
                boxShadow: '0px 0px 4px #B2B2B2',
                padding: 10,
                backgroundColor: 'white',
                width: 500,
                height: 75, }}>
                <div className="btn"
                    style={{ padding: 0, fontSize: 12, float: 'right' }}
                    onMouseOver={() => this.setState({ hoverRemove: true })}
                    onMouseLeave={() => this.setState({ hoverRemove: false })}
                    onClick={() => onChange('popuptime', 0)}>
                    <img src={this.state.hoverRemove ?
                        "/images/removehover.svg" : "/images/remove.svg"} height={10} width={10}/>
                </div>
                <div style={{
                    fontWeight: 'bold',
                    color: (status == 'success') ? '#3C763D' : '#A94442',
                }} >
                    <div style={{ margin: 4 }}>
                        {( status == 'success' ?
                            <div>Update Success</div>
                        :   <div>Update Failed</div>
                        )}
                    </div>
                    <div style={{ margin: 4 }}>
                        <span style={{ fontWeight: 400 }}>{type}</span>{" "}
                        <span style={{ marginLeft: 10, color: 'black'}}>{value}</span>
                    </div>
                </div>

            </div>
        )
    }
}

export default PopUpUpdate
