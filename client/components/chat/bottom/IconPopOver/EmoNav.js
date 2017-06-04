import React from 'react'
import iconMaps from '~/config/iconMaps'
import readFileTest from '~/config'

class EmoNav extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
      const { mesId, sendEmo } = this.props

      return (
        <div style={{overflow: 'scroll', width:225, height: 300}} >
            {
              iconMaps.map(icon =>
                <img key={icon} src={icon} width="60" height="60" style={{marginLeft:5}} onClick={() => sendEmo(icon, mesId)}/>
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
