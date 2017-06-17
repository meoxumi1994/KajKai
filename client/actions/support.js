import config from '../config'

import { getAPI } from '../fakedata'

console.log('config.ISTEST', config.ISTEST)

export const flet = (url, need, get) => {
    let myurl = config.getDomain() + url
    console.log(myurl,need,get)

    const P = (config.ISTEST == 2)?
    getAPI(url,need) : fetch( myurl , {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(need)
    }).then((response) => {
        return response.json()
    })
    .then((res) => {
        console.log(res)
        return res
    })
    .catch((error)=> {
        console.error(myurl,error);
    })
    return P
}

export const flem = (url, get, param, query) => {
    let myurl = config.getDomain() + url

    if (param) {
      param.map((pr) => {
        myurl += '/' + pr
      })
    }

    if (query) {
      let ch = '?'
      for (let qr in query) {
        myurl += ch + qr + '=' + query[qr]
        if (ch == '?') {
          ch = '&'
        }
      }
    }
    
    console.log(myurl,get)
    const P = (config.ISTEST == 2)? getAPI(url,{}) : fetch( myurl , {
        method: 'GET',
        credentials: 'include',
    }).then((response) => {
        console.log(response)
        return response.json()
    })
    .then((res) => {
        console.log(res)
        return res
    })
    .catch((error)=> {
        console.error(myurl,error);
    })
    return P
}

export const fleu = (url, need, get) => {
    let myurl = config.getDomain() + url
    console.log(myurl,need,get)
    const P = (config.ISTEST == 2)? getAPI(url,need) : fetch( myurl , {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(need)
    }).then((response) => response.json())
    .then((res) => {
        console.log(res)
        return res
    })
    .catch((error)=> {
        console.error(myurl,error);
    })
    return P
}
