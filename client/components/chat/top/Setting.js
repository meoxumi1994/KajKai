import React from 'react'
import { Button, OverlayTrigger, Popover, Nav, NavItem, MenuItem, Navbar } from 'react-bootstrap'

const Setting = ({changeGroupName, styles}) => {
  return (
    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={
      <Popover id="popover-trigger-click-root-close" title="Setting">
          <Button onClick={() => changeGroupName()}>
              Change group name
          </Button>
      </Popover>}>

      <img style={styles.headerIcon} src="/images/whiteSetting.png"/>
    </OverlayTrigger>
  )
}

const SettingPopOver = (
  <Popover id="popover-trigger-click-root-close" title="Setting">
      <Button onClick={() => changeGroupName()}>
          Change group name
      </Button>
  </Popover>
)

export default Setting
