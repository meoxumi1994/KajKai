import React from 'react'

import { Modal } from 'react-bootstrap'

class ChoosePostRow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            '0' : false,
            '1' : false,
            '2' : false,
            '3' : false,
            '4' : false,
            '5' : false,
            '6' : false,
        }
    }
    resetState(){
        this.setState({
            '0' : false,
            '1' : false,
            '2' : false,
            '3' : false,
            '4' : false,
            '5' : false,
            '6' : false,
        })
    }
    render(){
        const { showModal, close, onChoose } = this.props
        const type = ['title','normal','product','listproduct','textimage','imagetext','groupimage']
        return(
            <Modal show={showModal} bsSize="small" animation={false} onHide={() => close()}>
                <div style={{ borderRadius: 5 }}>
                    {type.map((item,index) =>
                        <div key={index}>
                            <div className="btn"
                                onMouseOver={() => this.setState({ [index] : true })}
                                onMouseLeave={() => this.setState({ [index] : false })}
                                onClick={() => {
                                    onChoose(item)
                                    this.resetState()
                                }}
                                style={{ paddingTop: 5, paddingBottom: 5 ,
                                    backgroundColor: this.state[index] ? '#4267B2' : 'white',
                                    borderRadius: 0,
                                    width: '100%',
                                }}>
                                <img src={"/images/postrow/"+item+".svg"} width={200}/>
                            </div>
                        </div>
                    )}
                </div>
            </Modal>
        )
    }
}

export default ChoosePostRow
