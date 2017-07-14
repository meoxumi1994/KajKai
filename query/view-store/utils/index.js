export const checkInside = (latitude, longitude, swlat, swlng, nelat, nelng) => {
  return swlat <= latitude && latitude <= nelat && swlng <= longitude && longitude <= nelng
}
