import config from '../config'

export const flet = (url, need, get) => {
    let myurl = config.getDomain() + url
    console.log(myurl,need,get)
    return fetch( myurl , {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(need)
    })
    .then((response) => {
        return response.json()
    })
    .then((res) => {
        console.log(res)
        return res
    })
    .catch((error)=> {
        console.error(myurl,error);
    })
}

export const flem = (url, get, param, query) => {
    let myUrl = config.getDomain() + url

    if (param) {
      param.map((pr) => {
        myUrl += '/' + pr
      })
    }

    if (query) {
      let ch = '?'
      for (let qr in query) {
        myUrl += ch + qr + '=' + query[qr]
        if (ch == '?') {
          ch = '&'
        }
      }
    }

    console.log(myUrl,get)
    return fetch( myUrl , {
        method: 'GET',
        credentials: 'include',
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

export const fleu = (url, need, get) => {
    let myurl = config.getDomain() + url
    console.log(myurl,need,get)
    return fetch( myurl , {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'PUT',
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
