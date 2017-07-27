const url = "https://www.kajkai.com"

export const link = {
    user: (id) => {
        return url + "/user/" + id
    },
    store: (id) => {
        return url + "/" + id
    },
    sellpost: (id) => {
        return url + "/sellpost/" + id
    }
}
