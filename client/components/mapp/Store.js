import React from 'react';
import { Link } from 'react-router-dom';
import StoreInDetailsContainer from '~/containers/mapp/StoreInDetailsContainer'

const Store = ({marker, openStoreModal}) => {

  if (marker == undefined) {
    return (
      <div></div>
    )
  }

  return (
    <div className="containers">
      <div className="list-group-item" style={{ height: 90, paddingTop:3, paddingBottom: 3, paddingLeft: 0,paddingRight: 0 }}>
          <div className="btn btn-transparent btn-xs" style={{ float: 'left'}}>
              <img data-toggle="modal" data-target={'#'+marker.key} src={marker.avatarUrl} style={{ width: 70, height: 80 }}/>
          </div>
          <div style={{ marginLeft: 50}}>

              <div>{marker.street}<small className="text-muted" > 5 mins ago</small></div>

              <div>
                  <small className="text-muted" >phone: 091232143254</small>
              </div>

              <div>
                  <small>hôm nay cửa hàng có hạ giá ạ</small>
              </div>

              <div>
                  <small className="text-muted">Like{" "}<a>139</a></small>
                  <small className="text-muted">{" "}Comment{" "}<a>21</a></small>
                  <small className="text-muted">{" "}Share{" "}<a>123</a></small>
              </div>

          </div>
      </div>


      <div className="modal fade" id={marker.key} role="dialog">
          <StoreInDetailsContainer marker={marker}/>
      </div>

    </div>
  )
}



export default Store;
