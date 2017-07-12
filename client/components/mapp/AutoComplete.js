import React from 'react'

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.initAutocomplete = () => {
      this.autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('autocomplete')),
        {types: ['geocode']}
      )
    }
    this.loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDv-w2J9O0JzXzIV2Rgx9LSF1OWXRXeCZw&libraries=places&callback=initAutocomplete')
  }

  loadJS(src) {
      const ref = window.document.getElementsByTagName("script")[0]
      const script = window.document.createElement("script")
      script.src = src
      script.async = true
      ref.parentNode.insertBefore(script, ref)
  }

  render() {
    const { SEARCH_LOCATION, searchType, onLocationChanged } = this.props
    let inputSearchLocation
    return (
      <div>
        <input ref={node => { inputSearchLocation = node}}
          disabled={searchType == 'STORE' || searchType == 'USER'}
          id="autocomplete"
          placeholder={SEARCH_LOCATION}
          type="text"
          onBlur={() => onLocationChanged(inputSearchLocation.value.trim())}
          onKeyDown={(e) => { if(e.keyCode == 13) {
           inputSearchLocation.blur()
          }}}
        />
      </div>
    )
  }
}
