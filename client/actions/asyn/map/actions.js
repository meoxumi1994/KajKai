export const updateCurrentLocation = (show, lat, lng) => ({
    type: 'UPDATE_CURRENT_LOCATION',
    show,
    coords: {
      lat,
      lng
    }
})
