export const checkInside = (latitude, longitude, swlat, swlng, nelat, nelng) => {
  return swlat <= latitude && latitude <= nelat &&
  ((swlng <= nelng && swlng <= longitude && longitude <= nelng ) ||
   (swlng > nelng && ((swlng <= longitude && longitude <= 180) ||
                      (-180 <= longitude && longitude <= nelng))))
}
