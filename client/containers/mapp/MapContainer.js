import { connect } from 'react-redux'
import Map from '~/components/mapp/map'
import { updateCurrentPosition } from '~/actions/asyn/map/actions'

const mapStateToProps = (state, ownProps) => {
  console.log('---MAP ', state.inst.map.markers);
  return {
    map: state.inst.map
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateCurrentLocation: (show, lat, lng) => {
        dispatch(updateCurrentPosition(show, lat, lng))
    },
    getStoreMarkers: (bounds) => {
        dispatch({type: 'GET_STORE_MARKERS', bounds: bounds})
    },
    getPoint : (A, B) => {
        dispatch({type: 'POINT', A, B})
    }
})

const MapContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Map)

export default MapContainer
