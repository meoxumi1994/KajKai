export const updateLikes = (likes = [], id, name) => {
    let has = false
    let newLikes = []
    likes.map((item) => {
        if(item.id != id){
            newLikes = [
                ...newLikes,
                item
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

export const updateFollows = (follows = [], userid, avatarUrl, username) => {
    let has = false
    let newFollows = []
    follows.map((item) => {
        if(item.userid != userid){
            newFollows = [
                ...newFollows,
                item
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
                avatarUrl: avatarUrl,
                username: username,
            }
        ]
    }
    return newFollows
}
