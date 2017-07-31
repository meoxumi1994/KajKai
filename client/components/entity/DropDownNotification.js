import React from 'react'

import RiseUp from '~/components/entity/draw/RiseUp'
import GroupNotification from '~/containers/entity/GroupNotification'

class DropDownNotification extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount(){
        let that = this
        $('#dropdownnotification').on('mousewheel DOMMouseScroll', function(e) {
            if(that.overgroup.scrollTop + that.group.clientHeight == that.group.scrollHeight){
                that.props.getMoreNotification();
                e.originalEvent.setWheelDelta = 0;
            }
            var scrollTo = null;
            if(e.type === 'mousewheel') {
                scrollTo = (e.originalEvent.wheelDelta * -1);
            }
            else if(e.type === 'DOMMouseScroll') {
                scrollTo = 40 * e.originalEvent.detail;
            }
            scrollTo = scrollTo / 5
            if(scrollTo) {
                e.preventDefault();
                $(this).scrollTop(scrollTo + $(this).scrollTop());
            }
        })
    }
    render(){
        const { numUnreaded, onChange, onSearchTypeSelected, clickNotification } = this.props
        return(
            <div className="input-group-btn" style={{ display: 'inline-block' }}>
              <div className="btn dropdown-toggle"
                  style={{ borderRadius: 0, padding: 0 }}
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="btn" style={{ padding: 0 }}
                      onClick={() => {
                          this.setState({ show: true })
                          clickNotification()
                      }}>
                      <RiseUp
                          src="/images/globe.svg"
                          style={{
                              width: 35,
                              height: 29,
                              imgWidth: 22,
                              imgHeight: 22,
                          }} number={numUnreaded}/>
                  </div>
              </div>
              <ul  className="dropdown-menu"
                  style={{  marginLeft: -380, marginTop: 5, borderRadius: 0 }}>
                  <div style={{ marginLeft: 10, fontSize: 12 , padding: 2,   fontWeight: 'bold' }}>{"Notification"}</div>
                  <hr style={{ margin: 0 }}/>
                  <div id="dropdownnotification" ref={ overgroup => this.overgroup = overgroup }
                      style={{ overflow: 'auto', maxHeight: 600, }}>
                      <div ref={ group => this.group = group }>
                          {this.state.show &&
                              <GroupNotification/>
                          }
                      </div>
                  </div>
                  <hr style={{ margin: 0 }}/>
                  <div style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 12, textAlign: 'center'}}>
                      <div className="btn" style={{ padding: 0 }}>
                          <a style={{ color: '#365899', fontSize: 12}}>{"See All"}</a>
                      </div>
                  </div>
                  {/* <img style={{
                          position: 'absolute',
                          right: -700,
                          top: -8.8,
                      }}
                      width={22}
                      height={11}
                      src="/images/arrowupdropdown.svg"
                  /> */}
              </ul>
            </div>
        )
    }
}

export default DropDownNotification
