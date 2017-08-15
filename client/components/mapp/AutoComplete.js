import React from 'react'

export default class AutoComplete extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.initAutocomplete = () => {
            this.autocomplete = new google.maps.places.Autocomplete(
                (document.getElementById('autocomplete')),
                { types: ['geocode'] }
            )
            this.autocomplete.addListener('place_changed', () => {
                const place = this.autocomplete.getPlace()
                const lat = place.geometry.location.lat()
                const lng = place.geometry.location.lng()
                this.props.onLocationChanged(lat, lng)
            });
        }
        this.loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDEy3sjvl8Sq5bsInBAU61uu_u4_fK3zvk&libraries=places&callback=initAutocomplete')
    }
    loadJS(src) {
        const ref = window.document.getElementsByTagName("script")[0]
        const script = window.document.createElement("script")
        script.src = src
        script.async = true
        ref.parentNode.insertBefore(script, ref)
    }
    render() {
        const { SEARCH_LOCATION, searchType, data } = this.props
        let inputSearchLocation
        return (
            <input className="form-control input-sm" ref={node => { inputSearchLocation = node}}
                disabled={searchType == 'STORE' || searchType == 'USER'}
                id="autocomplete"
                placeholder={SEARCH_LOCATION}
                type="text"
                style={{ border: 0,  borderRadius: '2px 2px 2px 2px', fontSize: 13 , outline: 'none', height: 28 }}
            />
        )
    }
}
