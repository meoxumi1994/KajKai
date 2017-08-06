import React from 'react'

import PopUpNotify from '~/containers/entity/popup/PopUpNotify'

class GroupPopUp extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { popups } = this.props

        return(
            <div style={{
                position: 'fixed',
                left: 32,
                bottom: 25,
                zIndex: 100,
            }}>
                {popups.map((item, index) => {
                    if(popups.length - index < 7)
                        return(
                            <div key={item} style={{ marginBottom: 5 }}>
                                <PopUpNotify  id={item}/>
                            </div>
                        )
                    return <div key={item}></div>
                })}
            </div>
        )
    }
}

export default GroupPopUp
