import React from 'react'
import { Modal } from 'react-bootstrap'

class Progress extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        setInterval(() => {
            if( this.props.ratio < 95 ){
                this.props.downRatio();
            }
        }, 333)
    }
    render(){
        const { showModal, close, ratio } = this.props
        return(
            <Modal show={showModal} onHide={() => {
                if(ratio >= 95)
                    close()
            }}>
                <div className="progress" style={{ height: 500, padding: '245px 20px 0px 20px'}}>
                  <div className="progress-bar" role="progressbar" aria-valuenow="70"
                  aria-valuemin="0" aria-valuemax="100"
                    style={{ width: ratio+'%', height: 10, borderRadius: 5 }}>
                    <span className="sr-only">70% Complete</span>
                  </div>
                </div>
            </Modal>
        )
    }
}

export default Progress
