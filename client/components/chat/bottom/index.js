import React from 'react'
import { FormGroup, FormControl, HelpBlock, ControlLabel, Button , OverlayTrigger, Popover, Nav, NavItem } from 'react-bootstrap'
import ModalUploadImageContainer from '~/containers/chat/bottom/ModalUploadImageContainer'
import EmoNavContainer from '~/containers/chat/bottom/EmoNavContainer'

const ChatBottom = ({mesId, userId, sendMessage, displayImageModal, chatListMap}) => {
  let msg

  const { store } = chatListMap[mesId]
  return (
    <div style={{width: 280}}>
        <form onSubmit={e => {
            e.preventDefault()
            if (msg.value.trim()) {
                console.log('component', store, userId);
                sendMessage(mesId, store == undefined || store.ownerId != userId? userId: store.id , msg.value, '', 'message')
                msg.value = ''
            }
        }}>

        <div className="input-group" style={{width: '100%'}}>
          <FormControl disabled={mesId == 0? true: false}
            inputRef={ref => { msg = ref }}
            placeholder="Enter message"
          />
        </div>

        <button disabled={mesId == 0? true: false} type="button" style={styles.iconButton} className="btn btn-default btn-md" onClick={() => displayImageModal(mesId)}>
            <i className="glyphicon glyphicon-camera"></i>
        </button>

        <OverlayTrigger trigger="click" rootClose placement="top" overlay={IconPopOver(mesId)}>
            <button disabled={mesId == 0? true: false} style={styles.iconButton} className="btn btn-default btn-md" type="button">
                <i className="glyphicon glyphicon-apple"></i>
            </button>
        </OverlayTrigger>

      </form>
      <ModalUploadImageContainer mesId={mesId}/>
    </div>
  )
}

const IconPopOver = (mesId) => {
    return (
      <Popover id="popover-trigger-click-root-close">
          <EmoNavContainer mesId={mesId}/>
      </Popover>
    )
}

const styles = {
    iconButton: {
      fontSize: 12,
      width: '50%'
    }
}

export default ChatBottom
