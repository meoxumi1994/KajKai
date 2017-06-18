import { connect } from 'react-redux'
import Map from '~/components/mapp/map'
import { updateCurrentLocation } from '~/actions/asyn/map/actions'

const mapStateToProps = (state, ownProps) => {
  console.log('---MAP ', state.inst.map);
  return {
    map: state.inst.map
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateCurrentLocation: (show, lat, lng) => {
        dispatch({type: 'UPDATE_CURRENT_LOCATION', lat, lng})
    }
})

const MapContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Map)

export default MapContainer
