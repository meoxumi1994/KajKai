import React from 'react'

class Store extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { index, mesId, chatListMap, user } = this.props

        const { store } = chatListMap[mesId]

        if (chatListMap[mesId] == undefined || store == undefined || store.ownerId != user.id) {
            return (
                <div></div>
            )
        }
        return (
            <div style={{
              borderStyle: 'solid',
              borderWidth: 0.1,
              borderColor: '#dbdbdb',
              position: 'fixed',
              bottom: 380,
              width: 280,
              height: 50,
              backgroundColor: 'white',
              zIndex: 100,
              marginLeft: index * 285 + 5,
            }}>

                <img src={store.avatarUrl} style={{
                  position: 'absolute',
                  width: 40,
                  height: 40,
                  margin: '4px 10px 0px 10px',
                  zIndex: 100,
                  left: 0,
                  marginTop: 4
                }}/>

                <label style={{marginLeft: 60, marginTop: 12, color: 'white', position: 'absolute', fontSize: 16, zIndex: 100, textShadow: '0px 2px 2px black'}}>
                    <a href={'/' + store.urlName} style={{color: 'white'}}>{store.storeName}</a>
                </label>

                <img style={{ width: 280, height: 100, borderRadius: 2, opacity: 0.5, borderRadius: 8}} src={store.coverUrl}/>

            </div>
        )
    }
}
export default Store
