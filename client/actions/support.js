import config from '../config'

console.log('config.ISTEST', config.ISTEST)

export const flet = (url, body) => {
    let myurl = config.getDomain() + url
    console.log('POST',myurl, body)
    return fetch( myurl , {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(body)
    }).then((response) => response.json())
    .then((res) => {
        console.log('POST',myurl, res)
        return res
    })
    .catch((error)=> {
        console.error('POST',myurl,error);
    })
}

export const flem = (url, body) => {
    let myurl = config.getDomain() + url
    // if (myurl.includes('/search')) {
    //   for (let i = 0; i < myurl.length; i++) {
    //     if (myurl.substr(i, 7) == '/search') {
    //       myurl = 'http://10.20.16.136:3001' + myurl.substr(i)
    //       break
    //     }
    //   }
    // }
    if (body) {
      let ch = '?'
      for (let qr in body) {
        myurl += ch + qr + '=' + body[qr]
        if (ch == '?') {
          ch = '&'
        }
      }
    }
    console.log('GET',myurl)
    return fetch( myurl , {
        headers: {
            "Accept-Encoding": "application/json"
        },
        method: 'GET',
        credentials: 'include',
    }).then((response) => response.json())
    .then((res) => {
        console.log('GET',myurl, res)
        return res
    })
    .catch((error)=> {
        console.error('GET',myurl,error);
    })
}

export const fleu = (url, body) => {
    let myurl = config.getDomain() + url
    console.log('PUT',myurl, body)
    return fetch( myurl , {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(body)
    }).then((response) => response.json())
    .then((res) => {
        console.log('PUT',myurl, res)
        return res
    })
    .catch((error)=> {
        console.error('PUT',myurl,error);
    })
}
