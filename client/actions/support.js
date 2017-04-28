import config from '../config'

export const flet = (url, need, get) => {
    let myurl = config.getDomain() + url
    console.log(myurl,need,get)
    return fetch( myurl , {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(need)
    })
    .then((response) => response.json())
    .then((res) => {
        console.log(res)
        return res
    })
    .catch((error)=> {
        console.error(myurl,error);
    })
}

export const flem = (url, get) => {
    console.log("flem config.getDomain()",config.getDomain())
    let myurl = config.getDomain() + url
    console.log(myurl,get)
    return fetch( myurl , {
        method: 'GET',
        credentials: 'include'
    })
    .then((response) => response.json())
    .then((res) => {
        console.log(res)
        return res
    })
    .catch((error)=> {
        console.error(myurl,error);
    })
}
