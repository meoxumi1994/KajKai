import React from 'react'

import ContentShow from '~/components/entity/ContentShow'

const getString =  (str) => {
    let newstr = ""
    str.split('\n').map((item) => newstr += item)
    return newstr.substr(0,50) + ((newstr.length > 50)?'...':'')
}

class PopUpNotify extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount(){
        const audio = new Audio('/audios/notify.mp3');
        audio.play();
        setTimeout(() => {
            this.props.onClose()
        },6000)
    }
    render(){
        const { id, type, value } = this.props
        if(!type || isclose) return <div></div>
        return(
            <div className="btn" style={{
                display: 'inline-block',
                textAlign: 'left',
                padding: 0,
                animationName: 'closepopup',
                animationDuration: '1s',
                animationDelay: '5s',
                borderRadius: 2.5,
                border: '1px solid #B2B2B2',
                boxShadow: '0px 0px 4px #B2B2B2',
                padding: 5,
                backgroundColor: 'white',
                width: 270,
                height: 85, }}
                >
                
            </div>
        )
    }
}

export default PopUpNotify
