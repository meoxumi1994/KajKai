export const updateLikes = (likes, userid, username) => {
    let has = false
    let newLikes = []
    likes.map((item) => {
        if(item.userid != userid){
            newLikes = [
                ...newLikes,
                {
                    userid: item.userid,
                    username: item.username,
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
                userid: userid,
                username: username,
            }
        ]
    }
    return newLikes
}
