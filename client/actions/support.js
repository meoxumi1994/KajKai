import config from '../config'

console.log('config.ISTEST', config.ISTEST)

export const flet = (url, body) => {
    let myurl = config.getDomain() + url
    console.log(myurl, body)
    return fetch( myurl , {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(body)
    }).then((response) => response.json())
    .then((res) => {
        console.log(myurl, res)
        return res
    })
    .catch((error)=> {
        console.error(myurl,error);
    })
}

export const flem = (url, body) => {
    let myurl = config.getDomain() + url
    if (body) {
      let ch = '?'
      for (let qr in body) {
        myurl += ch + qr + '=' + body[qr]
        if (ch == '?') {
          ch = '&'
        }
      }
    }
    console.log(myurl)
    return fetch( myurl , {
        method: 'GET',
        credentials: 'include',
    }).then((response) => response.json())
    .then((res) => {
        console.log(myurl, res)
        return res
    })
    .catch((error)=> {
        console.error(myurl,error);
    })
}

export const fleu = (url, body) => {
    let myurl = config.getDomain() + url
    console.log(myurl, body)
    return fetch( myurl , {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(body)
    }).then((response) => response.json())
    .then((res) => {
        console.log(myurl, res)
        return res
    })
    .catch((error)=> {
        console.error(myurl,error);
    })
}
