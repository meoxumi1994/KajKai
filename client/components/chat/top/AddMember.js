import React from 'react'
import { Button, FormControl, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap'
// import TagsInput from 'react-tagsinput'

class AddMember extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      let members
      const { mesId, styles,
              user, chatListMap, hideSearch, hideAddMember,
              ADD_MEMBER, DONE, CANCEL, NO_DATA,
              addMember, searchUser, addSearchedMember } = this.props

      const { search, usersKey } = chatListMap[mesId]
      const { suggestions, results } = search
      const searchDisplay = chatListMap[mesId].display.search
      return (
        <form style={styles.addMemberDiv} onSubmit={e => {
            e.preventDefault()
            if (members.value.trim()) {
                searchUser(mesId, members.value.trim())
            }
        }}>
          <span className="input-group-btn">
            <div className="input-group" style={{width: '100%'}}>
                  <FormControl
                    inputRef={ref => {members = ref}}
                    placeholder={ADD_MEMBER}
                    style={{width: '80%', height: 40, fontSize: 15}}
                    onChange={(e) => hideSearch(mesId, e.target.value)}
                  >
                  </FormControl>
                  <button disabled={mesId == 0 && results.keyy.length == 0? true: false} type="button" style={{width: '20%', height: 40, fontSize: 15}}
                      className={results.keyy.length == 0? 'btn': 'btn btn-danger'}
                      onClick={() => results.keyy.length == 0? hideAddMember(mesId) :addMember( mesId, user.id, results.keyy, usersKey)}>
                          { results.keyy.length == 0? CANCEL: DONE}
                  </button>
            </div>
          </span>
          <div style={{position: 'absolute', width: '100%', overflowY: 'scroll', backgroundColor: 'white', zIndex:100 }}>
              {
                  !searchDisplay? undefined :
                    (
                      suggestions.keyy.length == 0?
                      <div style={{borderWidth: 0.5, borderStyle: 'solid', width: '100%', height: 50, backgroundColor: 'white', color: 'black', textAlign: 'center'}}>
                          <p style={{marginTop: 10}}><i>{NO_DATA}</i></p>
                      </div>
                      :
                      suggestions.keyy.map(user => {
                          const { id, username, avatarUrl } = suggestions.mapp[user]
                          return (
                              <button type="button" key={id} style={{width: '100%'}} className="btn btn-default"
                              onClick={() => { addSearchedMember(mesId, suggestions.mapp[user], results.keyy); members.value=''} }>
                                <div className="col col-xs-2">
                                    <img src={avatarUrl} style={{width: 40, height: 40, borderRadius: 50}}/>
                                </div>
                                <div className="col col-xs-5">
                                    <p style={{marginTop: 10}}>{username}</p>
                                </div>
                              </button>
                          )
                      })
                    )
              }
          </div>
        </form>
      )
    }
}

export default AddMember
