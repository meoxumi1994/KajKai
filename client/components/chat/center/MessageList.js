import React from 'react'
import { Popover, Row } from 'react-bootstrap'
import Message from './Message'

const style = {
  alignRight: {
    img: {
      float: 'right',
      marginRight: 20
    },
    text: {
      marginRight: 40,
      marginTop: 10,
      textAlign: 'right'
    }
  },
  alignLeft: {
    img: {
      float: 'left',
      marginLeft: 20,
    },
    text: {
      marginLeft: 40,
      marginTop: 10
    }
  },
  messageListDiv: {
    width: 900,
    height: 600,
    overflow: 'scroll'
  }
}

class MessageList  extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      const { myInfo, partnerInfo, messages, visibility, lazyLoad } = this.props
      if (messages.length > 0) {
        return (
          <div style={{display: visibility}}>
            <h3><i>{partnerInfo.username}</i></h3>
            <div style={style.messageListDiv}>

                <div
                    onClick={() => this.props.showMore({
                      id: partnerInfo.id,
                      offset: lazyLoad.offset + 10
                    })}
                    style={{textAlign: 'center'}}>
                    <i><a>(Show more)</a></i>
                </div>

                {messages.reverse().map(message =>
                    myInfo.id === JSON.parse(message).id?
                        <Message key={JSON.parse(message).time}
                            {...JSON.parse(message)}
                            user={myInfo}
                            style={style.alignRight}
                        />
                      :
                        <Message key={JSON.parse(message).time}
                            {...JSON.parse(message)}
                            user={partnerInfo}
                            style={style.alignLeft}
                        />
                )}
            </div>
          </div>
        )
      } else {
          return (
            <div style={{display: visibility}}>
              <h3><i>{partnerInfo.username}</i></h3>
              <div style={style.messageListDiv}>
              </div>
            </div>
          )
      }

  }
}

export default MessageList
