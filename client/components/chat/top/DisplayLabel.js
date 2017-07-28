import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'

class DisplayLabel extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {
                mesId, styles,
                chatListMap,
                removeUser
              } = this.props

        const { usersKey, usersMap, displayLabel, display, search } = chatListMap[mesId]

        const { results } = search

        let label = displayLabel
        if (label == undefined || label == '') {
            label = ''
            for (let i in usersKey) {
                label += usersMap[usersKey[i]].username + ', '
            }
            label = label.substring(0, label.length - 2)
        }

        return (
            <div style={{width: '75%'}}>
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popoverHoverFocus(usersKey, usersMap)}>
                  {
                  usersKey.length == 0 && results.keyy.length == 0? <label style={styles.displayLabel}>New message</label>:
                  display.addMember?
                  <div>
                      {
                        usersKey.map(uKey =>
                          <div key={uKey} >
                              <button style={{height: 30, marginTop: 5, marginBottom: 5, marginLeft: 15, backgroundColor: '#c64949'}} className="btn">
                                  {usersMap[uKey].username}
                              </button>
                          </div>)
                      }
                      {
                        results.keyy.map((uKey, index) =>
                        usersKey.indexOf(uKey) != -1? undefined :
                        usersKey.length == 0 && index == 0?
                        <div key={uKey}>
                            <label style={{marginTop: 5, marginBottom: 5}}>
                                <button style={{height: 30, marginLeft: 15, backgroundColor: '#c64949'}} className="btn">{results.mapp[uKey].username}</button>
                                <button style={{height: 30, backgroundColor: '#c64949'}} className="btn" onClick={() => removeUser(mesId, uKey)}>x</button>
                            </label>
                        </div>
                        :
                        <label key={uKey} style={{marginTop: 5, marginBottom: 5}}>
                            <button style={{height: 30, marginLeft: 15, backgroundColor: '#c64949'}} className="btn">{results.mapp[uKey].username}</button>
                            <button style={{height: 30, backgroundColor: '#c64949'}} className="btn" onClick={() => removeUser(mesId, uKey)}>x</button>
                        </label>
                      )
                    }
                  </div>
                  :
                      <label style={styles.displayLabel}>{label.length > 24? label.substring(0, 25) + '...': label}</label>
                  }
              </OverlayTrigger>
          </div>
        )
    }
}

const popoverHoverFocus = (usersKey, usersMap) => {
    return (
      <Popover id="popover-trigger-hover-focus" title="Conversator member(s)">
          {
            usersKey.map(id =>
              <div key={id}>
                  <img src={usersMap[id].avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginBottom: 10, marginRight: 10}}/>
                  {usersMap[id].username}
              </div>
            )
        }
      </Popover>
    )
}


export default DisplayLabel
