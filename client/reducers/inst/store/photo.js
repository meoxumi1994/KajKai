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
        case 'GET_PHOTO_SUCCESS':
            switch (action.kind) {
                case 'user':
                    return {...state,
                        userPhotos: action.listImage
                    }
                case 'store':
                    return {...state,
                        storePhotos: action.listImage
                    }
                case 'postrow':
                    return {...state,
                        postPhotos: action.listImage
                    }
                case 'product':
                    return {...state,
                        productPhotos: action.listImage
                    }
                default:
                    return state
            }
        default:
            return state
    }
}

export default photo
