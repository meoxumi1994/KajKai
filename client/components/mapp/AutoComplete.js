import React from 'react'

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: 'San Francisco, CA' }
    this.onChange = (address) => this.setState({ address })
  }

  componentDidMount(){
      this.props.onLoadCategory()
  }

  render() {
    return (
      <div id="locationField">
        <input id="autocomplete" placeholder="Enter your address"
               onFocus="geolocate()" type="text"></input>
      </div>
    )
  }
}
