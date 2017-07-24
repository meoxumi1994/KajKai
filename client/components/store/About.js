import React from 'react'

import ShowInMap from '~/containers/entity/map/ShowInMap'

const About = ({ category, firstCategory, secondCategory, urlname, phone, storename, numfollow, numlike,  address, position }) => {
    return(
        <div style={{
            borderRadius: 4,
            border: '1px solid #CCCCCC',
            boxShadow: '0px 0px 4px #CCCCCC',
            backgroundColor: 'white',
            width: 938, marginTop: 10, marginLeft: -23,
            }}>
            <div style={{ fontSize: 20, padding: 10, backgroundColor: '#F6F7F9'}}>
                About
            </div>
            <hr style={{ margin: 0, padding: 0 }}/>
            <div style={{ padding: 10 }}>
                <span style={{ fontWeight: 'bold' }}>User name : </span>
                <span>{storename}</span>
            </div>
            <hr style={{ margin: 0, padding: 0 }}/>
            <div style={{ padding: 10 }}>
                <span style={{ fontWeight: 'bold' }}>Category 1: </span>
                <span>{firstCategory}</span>
            </div>
            <hr style={{ margin: 0, padding: 0 }}/>
            <div style={{ padding: 10 }}>
                <span style={{ fontWeight: 'bold' }}>Category 2: </span>
                <span>{(secondCategory == 'en')? 'english' : 'vietnam'}</span>
            </div>
            <hr style={{ margin: 0, padding: 0 }}/>
            <div style={{ padding: 10 }}>
                <span style={{ fontWeight: 'bold' }}>Category : </span>
                <span>{category}</span>
            </div>
            <hr style={{ margin: 0, padding: 0 }}/>
            <div style={{ padding: 10 }}>
                <span style={{ fontWeight: 'bold' }}>Phone : </span>
                <span>{phone}</span>
            </div>
            <hr style={{ margin: 0, padding: 0 }}/>
            <div style={{ padding: 10 }}>
                <span style={{ fontWeight: 'bold' }}>numfollow : </span>
                <span>{numfollow}</span>
            </div>
            <hr style={{ margin: 0, padding: 0 }}/>
            <div style={{ padding: 10 }}>
                <span style={{ fontWeight: 'bold' }}>numlike : </span>
                <span>{numlike}</span>
            </div>
            <hr style={{ margin: 0, padding: 0 }}/>
            <div style={{ padding: 10 }}>
                <span style={{ fontWeight: 'bold' }}>address : </span>
                <span>{address}</span>
            </div>
            <hr style={{ margin: 0, padding: 0, marginLeft: -2 }}/>
            <ShowInMap width={937} height={400} position={position}/>
        </div>
    )
}

export default About
