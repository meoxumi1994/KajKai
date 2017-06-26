import React from 'react'

const StoreInDetails = ({marker}) => {
  return (
    <div className="modal-dialog">
      <div className="modal-content">

        <div className="modal-header">
          <div className="list-group-item" style={{width: 570, height: 70}}>
              <img src={marker.avatarUrl} style={{width: 50, height: 50, borderRadius: 50, borderWidth: 1, float: 'left'}}/>
              <h4 style={{marginLeft: 60, marginTop: 13}} className="modal-title">{marker.street}</h4>
          </div>
        </div>

        <div className="modal-body">
          <p>Body</p>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>

      </div>
  </div>

  )
}

export default StoreInDetails
