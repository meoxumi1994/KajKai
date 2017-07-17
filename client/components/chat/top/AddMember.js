import React from 'react'
import { Button, FormControl, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap'
import TagsInput from 'react-tagsinput'

class AddMember extends React.Component {
    constructor(props) {
        super(props)
        this.state = {tags: []}
    }

    handleChange(tags) {
       this.setState({tags})
   }

    render() {
      let conversator
      const { mesId, styles,
              user, chatListMap, suggestions, searchDisplay,
              addMember, userSearch, add } = this.props
      console.log('suggestions',suggestions);
      return (
        <form style={styles.addMemberDiv} onSubmit={e => {
            e.preventDefault()
            if (conversator.value.trim()) {
                userSearch(conversator.value.trim())
            }
        }}>
          <span className="input-group-btn">
            <div className="input-group" style={{width: '100%'}}>
                  <FormControl
                    inputRef={ref => {conversator = ref}}
                    placeholder="Thêm thành viên..."
                    style={{width: '80%', height: 40, fontSize: 15}}
                  >
                  </FormControl>
                  <button style={{width: '20%', height: 40, fontSize: 15}} className="btn" onClick={() => addMember(mesId, user.id, conversator.value)}>
                      Xong
                  </button>
            </div>
          </span>
          <div style={{position: 'absolute', width: '30%', overflowY: 'scroll', backgroundColor: 'white', zIndex:100 }}>
              {
                  !searchDisplay? undefined :
                  suggestions.keyy.map(user => {
                      const { id, username, avatarUrl } = suggestions.mapp[user]
                      return (
                          <button key={id} style={{width: '100%'}} className="btn btn-default" onClick={() => {add(suggestions.mapp[user]);conversator.value=''}}>
                            <div className="col col-xs-2">
                                <img src={avatarUrl} style={{width: 40, height: 40}}/>
                            </div>
                            <div className="col col-xs-5">
                                {username}
                            </div>
                          </button>
                      )
                  })
              }
          </div>
        </form>
      )
    }
}


export default AddMember
