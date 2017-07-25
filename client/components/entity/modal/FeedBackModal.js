import React from 'react'

import { Modal } from 'react-bootstrap'
import ContentEditable from '~/components/entity/ContentEditable'

class FeedBackModal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content: '',
        }
    }
    render(){
        const { showModal, close, onFeedBack, feedback, FEED_BACK, FEED_BACK_DESCRIPTION,
            THANK_TO_FEEDBACK, FEED_BACK_FAILED } = this.props
        return(
            <Modal show={showModal} onHide={() => close()}>
                <div style={{ padding: 10, fontSize: 14.5, fontWeight: 'bold'}}>
                    {FEED_BACK}
                </div>
                <hr style={{ margin: 0 }}/>
                {(feedback == 'FEED_BACK_SUCCESS') ?
                    <div style={{ padding: 10 }}>
                        {THANK_TO_FEEDBACK}
                    </div>
                : (feedback == 'FEED_BACK_FAILED') ?
                    <div style={{ padding: 10 }}>
                        {FEED_BACK_FAILED}
                    </div>
                :   <div>
                        <div style={{ padding: 10 }}>
                            {FEED_BACK_DESCRIPTION}
                        </div>
                        <div style={{ padding: '0px 10px 0px 10px'}}>
                            <ContentEditable
                                minRows={10}
                                placehoder={" "}
                                content={this.state.content}
                                handleChange={(e) => this.setState({ content: e.target.value })}
                            />
                        </div>
                        <div style={{ padding: 10, height: 50 }}>
                            <div style={{ float: 'right' }} className="btn btn-default btn-sm"
                                onClick={() => onFeedBack(this.state.content)}>
                                Done
                            </div>
                        </div>
                    </div>
                }
            </Modal>
        )
    }
}

export default FeedBackModal
