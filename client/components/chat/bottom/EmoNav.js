import React from 'react'
import iconUtility from '~/config/iconUtility'
import { Popover, OverlayTrigger } from 'react-bootstrap'

class EmoNav extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
      const { mmmm, user, sendEmo } = this.props

      const popoverHoverFocus = (
        <Popover id="popover-trigger-hover-focus">
            Hello
        </Popover>
      )
      
      return (
        <div style={{overflow: 'scroll', width:225, height: 300}} >
              {
              iconUtility.getIconList().map(icon =>
                <OverlayTrigger key={icon.src} trigger={['hover', 'focus']} placement="bottom"
                  overlay={<Popover id="popover-trigger-hover-focus">{icon.syntax}</Popover>}>

                  <img src={icon.src} width="60" height="60" style={{marginLeft:5}} onClick={() => sendEmo(mmmm, user.id, icon.syntax, 'icon')}/>
                </OverlayTrigger>
              )
            }
        </div>
      )
    }

    componentWillMount() {
        this.props.loadIcon()
    }
}

export default EmoNav
