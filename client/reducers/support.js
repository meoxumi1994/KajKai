export const updateLikes = (likes, id, name) => {
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
