import { connect } from 'react-redux'
import Map from '~/components/mapp/Map'
import { getStores } from '~/actions/asyn/map/restful'

const mapStateToProps = (state, ownProps) => {
  console.log('---MAP ', state.inst.map);
  return {
    map: state.inst.map
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getStores: (nelat, nelng, swlat, swlng) => {
        dispatch(getStores(nelat, nelng, swlat, swlng))
    }
})

const MapContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Map)

export default MapContainer
