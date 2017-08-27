import React from 'react'

class Store extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { index, mesId, chatListMap } = this.props
        const { store } = chatListMap[mesId]
        if (store == undefined) {
            return (
                <div></div>
            )
        }
        return (
            <div style={{
              borderStyle: 'solid',
              borderWidth: 0.1,
              borderColor: 'grey',
              position: 'fixed',
              bottom: 400,
              width: 320,
              height: 45,
              backgroundColor: 'white',
              zIndex: 100,
              marginLeft: index * 325 + 5
            }}>
                <img src={store.storeAvatar} style={{width: 40, height: 40, borderRadius: 50, marginRight: 10, marginLeft: 10}}/>
                <label><a href={store.storeUrl}>{store.storeName}</a></label>
            </div>
        )
    }
}

export default Store
