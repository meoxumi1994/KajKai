import { flem } from '../../support'

export const getStores = (nelat, nelng, swlat, swlng) => dispatch => {
    flem('/store', {
        nelat,
        nelng,
        swlat,
        swlng,
        length: 30
    }, {}
    ).then((response) => {
          console.log('\n[API] /getStores ', response);
    })
}
