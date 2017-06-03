import React from 'react'
import { Popover, Nav, NavItem } from 'react-bootstrap'

const IconPopOver = (
    <Popover id="popover-trigger-click-root-close" title="Icons">
      <Nav bsStyle="pills" activeKey={1}>
          <NavItem eventKey={1}>NavItem 1 content</NavItem>
          <NavItem eventKey={2}>NavItem 2 content</NavItem>
          <NavItem eventKey={3}>NavItem 3 content</NavItem>
      </Nav>
    </Popover>
)

export default IconPopOver
