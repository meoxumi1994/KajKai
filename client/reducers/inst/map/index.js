const data = [{
   position: {
     lat: 21.019454,
     lng: 105.83857050000006
   },
   key: 'KT',
   street: 'D store',
   lastUpdated: '8',
   avatarUrl: 'http://kajkai-avatar.s3-ap-southeast-1.amazonaws.com/78c5e183e31557c11a43239526a3c91b3b8d1608e4b32d4e3fa2f8ee.jpg',
   defaultAnimation: 2,
 },{
   position: {
     lat: 21.0042141,
     lng: 105.83123139999998
   },
   key: 'TT',
   street: 'V store',
   defaultAnimation: 2,
   lastUpdated: '83',
   avatarUrl: "http://kajkai-avatar.s3-ap-southeast-1.amazonaws.com/0cac73f7a1deefa900a203950924437e54fa5358be8c3d6b863b971a.jpg",
 },{
   position: {
     lat: 21.0143557,
     lng: 105.83123139999998
   },
   key: 'ND',
   street: 'A store',
   lastUpdated: '59',
   avatarUrl: "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/18920193_1939695522976279_4061663005610034505_n.jpg?oh=f66442aa2ca21a1ad4541feabe7b9d38&oe=59A53626",
   defaultAnimation: 2,
 },{
   position: {
     lat: 20.9836984,
     lng: 105.86362570000006
   },
   key: 'HM',
   street: 'B store',
   lastUpdated: '9',
   avatarUrl: "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/18920193_1939695522976279_4061663005610034505_n.jpg?oh=f66442aa2ca21a1ad4541feabe7b9d38&oe=59A53626",
   defaultAnimation: 2,
 },{
   position: {
     lat: 20.9959819,
     lng: 105.80972440000005
   },
   key: 'TX',
   street: 'Thanh Xuan',
   lastUpdated: '10',
   avatarUrl: "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/18920193_1939695522976279_4061663005610034505_n.jpg?oh=f66442aa2ca21a1ad4541feabe7b9d38&oe=59A53626",
   defaultAnimation: 2,
 }]

const map = (state = {
  defaultCenter: {
    lat: 21.019454,
    lng: 105.83857050000006
  },
  currentPosition: {
    lat: '',
    lng: ''
  },
  loadMarkers : true,
  markers: [],
  showCurrentPosition: false,

}, action) => {
    switch (action.type) {
        case 'UPDATE_CURRENT_POSITION':
          return {
            ...state,
            currentPosition: {
                lat: action.coords.lat,
                lng: action.coords.lng
            },
            showCurrentPosition: action.show
          }

        case 'GET_STORE_MARKERS':
          var myMarkers = []
          for (let i in data) {
            if (inBound(action.bounds, data[i].position)) {
              myMarkers.push(data[i])
            }
          }
          return {
            ...state,
            markers: myMarkers
          }

        default:
            return state
    }
}

const inBound = (bounds, position) => {
  const southWest = {
    lat: bounds.getSouthWest().lat(),
    lng: bounds.getSouthWest().lng()
  }
  const northEast = {
    lat: bounds.getNorthEast().lat(),
    lng: bounds.getNorthEast().lng()
  }
  if ((position.lat > southWest.lat) && (position.lat < northEast.lat) && (position.lng > southWest.lng) && (position.lng < northEast.lng)) {
    return true
  }
  return false
}

export default map
