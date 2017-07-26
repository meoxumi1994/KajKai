export const updateLikes = (likes = [], id, name) => {
    let has = false
    let newLikes = []
    likes.map((item) => {
        if(item.id != id){
            newLikes = [
                ...newLikes,
                {
                    id: item.id,
                    name: item.name,
                }
            ]
        }else{
            has = true
        }
    })
    if(!has){
        newLikes = [
            ...newLikes,
            {
                id: id,
                name: name,
            }
        ]
    }
    return newLikes
}

export const updateFollows = (follows = [], userid) => {
    let has = false
    let newFollows = []
    follows.map((item) => {
        if(item.userid != userid){
            newFollows = [
                ...newFollows,
                {
                    userid: item.userid,
                }
            ]
        }else{
            has = true
        }
    })
    if(!has){
        newFollows = [
            ...newFollows,
            {
                userid: userid,
            }
        ]
    }
    return newFollows
}
