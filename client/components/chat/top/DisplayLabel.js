import React from 'react'

class DisplayLabel extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {
                mesId, styles,
                chatListMap, results,
                removeUser
              } = this.props

        const { usersKey, usersMap, displayLabel, display } = chatListMap[mesId]

        let label = displayLabel
        if (label == undefined || label == '') {
            label = ''
            for (let i in usersKey) {
                if (!usersMap[usersKey[i]].disabled) {
                    label += usersMap[usersKey[i]].username + ', '
                }
            }
            label = label.substring(0, label.length - 2)
        }

        return (
            <div>
                {usersKey.length == 0 && results.keyy.length == 0? <label style={styles.displayLabel}>Tin nhắn mới</label>:
                display.addMember?
                <div>
                    {usersKey.map(uKey => <button key={uKey} style={{height: 40, marginTop: 11, marginLeft: 15}} className="btn">{usersMap[uKey].username}</button>)}
                    {
                      results.keyy.map(uKey =>
                      <label key={uKey}>
                          <button style={{height: 40, marginTop: 11, marginLeft: 15}} className="btn btn-primary">{results.mapp[uKey].username}</button>
                          <button style={{height: 40, marginTop: 11}} className="btn btn-primary" onClick={() => removeUser(uKey)}>x</button>
                      </label>
                    )
                  }
                </div>
                :
                <label style={styles.displayLabel}>{label}</label>}
            </div>
        )
    }
}

export default DisplayLabel
