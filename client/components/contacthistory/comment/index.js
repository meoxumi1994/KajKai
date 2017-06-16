import React from 'react'

const Comment = ({}) => {
    return(
        <div style={{ height: '60%',}}>
            <div style={{ padding: 4, backgroundColor: '#E9EBEE'}}>
                <div style={{ float: 'right'}} className="form-check">
                      <input className="form-check-input" type="checkbox" value=""/>
                      <span style={{ fontSize: 13 }} >{" remove finished"}</span>
                 </div>
                <div className="input-group-btn">
                  <button type="button" className="btn btn-default btn-xs dropdown-toggle"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {"see all comment "}
                      <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a href="#" key="1">Another action</a></li>
                    <li><a href="#" key="2">Another</a></li>
                    <li><a href="#" key="3">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">All</a></li>
                  </ul>
                </div>


            </div>
        </div>

    )
}

export default Comment
