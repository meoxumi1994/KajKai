const photo = (state = {
    userPhotos: [
        '/images/garden.png','/images/garden.png','/images/garden.png','/images/garden.png','/images/garden.png','/images/garden.png',
    ],
    storePhotos: [
        '/images/garden.png','/images/garden.png','/images/garden.png','/images/garden.png','/images/garden.png','/images/garden.png',
    ],
    postPhotos: [
        '/images/garden.png','/images/garden.png','/images/garden.png','/images/garden.png','/images/garden.png','/images/garden.png',
    ],
    productPhotos: [
        '/images/garden.png','/images/garden.png','/images/garden.png','/images/garden.png','/images/garden.png','/images/garden.png',
    ],
}, action) => {
    switch (action.type) {
        case 'USER_GET_ING':
            return {...state,
                userPhotos: [],
            }
        case 'STORE_GET_ING':
            return {...state,
                storePhotos: [],
                postPhotos: [],
                productPhotos: [],
            }
        case 'GET_USER_PHOTO_SUCCESS':
            return {...state,
                userPhotos: action.images
            }
        case 'GET_STORE_PHOTO_SUCCESS':
            return {...state,
                storePhotos: action.images
            }
        case 'GET_POST_PHOTO_SUCCESS':
            return {...state,
                postPhotos: action.images
            }
        case 'GET_PRODUCT_PHOTO_SUCCESS':
            return {...state,
                productPhotos: action.images
            }
        default:
            return state
    }
}

export default photo
