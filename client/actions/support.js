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
    })
    .catch((error)=> {
        console.error(myurl,error);
    })
}
