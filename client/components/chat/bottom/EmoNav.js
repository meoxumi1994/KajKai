import React from 'react'
import iconUtility from '~/config/iconUtility'
import { Popover, OverlayTrigger } from 'react-bootstrap'

class EmoNav extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
      const { mesId, user, sendEmo } = this.props

      const popoverHoverFocus = (
        <Popover id="popover-trigger-hover-focus">
            Hello
        </Popover>
      )

      return (
        <div style={{overflow: 'scroll', width:225, height: 300}}>
            <div style={{width: 220, height: 45}}>
              <ul className="nav nav-tabs nav-pills" style={{width: '100%', height: '100%'}}>
                  <li className="active">
                      <a data-toggle="tab" href="#basic"><img src="/images/chat/emo/basic/happy.svg" style={{width: 25, height: 25}}/></a>
                  </li>
                  <li>
                      <a data-toggle="tab" href="#pokemon"><img src="/images/chat/emo/basic/bat.svg" style={{width: 25, height: 25}}/></a>
                  </li>
              </ul>
            </div>
            <div className="tab-content" style={{width: '100%', height: '100%', marginTop: 5}}>
                <div id="basic" className="tab-pane fade in active">
                  {
                    iconUtility.alex().map(icon =>
                      <OverlayTrigger key={icon.src} trigger={['hover', 'focus']} placement="bottom"
                        overlay={<Popover id="popover-trigger-hover-focus">{icon.syntax}</Popover>}>
                        <button className="btn" style={{width: 68, height: 68, backgroundColor: 'white'}}>
                            <img src={icon.src} width="50" height="50" onClick={() => sendEmo(mesId, user.id, icon.syntax, 'icon')}/>
                        </button>
                      </OverlayTrigger>
                    )
                  }
                </div>
                <div id="pokemon" className="tab-pane fade">
                {
                  iconUtility.titi().map(icon =>
                    <OverlayTrigger key={icon.src} trigger={['hover', 'focus']} placement="bottom"
                      overlay={<Popover id="popover-trigger-hover-focus">{icon.syntax}</Popover>}>
                        <button className="btn" style={{width: 68, height: 68, backgroundColor: 'white'}}>
                            <img src={icon.src} width="50" height="50" onClick={() => sendEmo(mesId, user.id, icon.syntax, 'icon')}/>
                        </button>
                    </OverlayTrigger>
                  )
                }
                </div>
            </div>


        </div>
      )
    }

    componentWillMount() {
        this.props.loadIcon()
    }
}

export default EmoNav
