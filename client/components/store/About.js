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
            <div className="container-fluid" style={{ padding: 10 }}>
                <div className="row">
                    <div className="col col-xs-2">
                        <span style={{ fontWeight: 'bold' }}>User name </span>
                    </div>
                    <div className="col col-xs-9" style={{ marginLeft: 28 }}>
                        <span>{storename}</span>
                    </div>
                </div>
            </div>

            <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
            <div className="container-fluid" style={{ padding: 10 }}>
                <div className="row">
                    <div className="col col-xs-2">
                        <span style={{ fontWeight: 'bold' }}>Category 1</span>
                    </div>
                    <div className="col col-xs-9" style={{ marginLeft: 28 }}>
                        <span>{firstCategory}</span>
                    </div>
                </div>
            </div>
            <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>

            <div className="container-fluid" style={{ padding: 10 }}>
                <div className="row">
                    <div className="col col-xs-2">
                        <span style={{ fontWeight: 'bold' }}>Category 2</span>
                    </div>
                    <div className="col col-xs-9" style={{ marginLeft: 28 }}>
                        <span>{secondCategory}</span>
                    </div>
                </div>
            </div>
            <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>

            <div className="container-fluid" style={{ padding: 10 }}>
                <div className="row">
                    <div className="col col-xs-2">
                        <span style={{ fontWeight: 'bold' }}>Category</span>
                    </div>
                    <div className="col col-xs-9" style={{ marginLeft: 28 }}>
                        <span>{category}</span>
                    </div>
                </div>
            </div>
            <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>

            <div className="container-fluid" style={{ padding: 10 }}>
                <div className="row">
                    <div className="col col-xs-2">
                        <span style={{ fontWeight: 'bold' }}>Phone</span>
                    </div>
                    <div className="col col-xs-9" style={{ marginLeft: 28 }}>
                        <span>{phone}</span>
                    </div>
                </div>
            </div>
            <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>

            <div className="container-fluid" style={{ padding: 10 }}>
                <div className="row">
                    <div className="col col-xs-2">
                        <span style={{ fontWeight: 'bold' }}>numfollow</span>
                    </div>
                    <div className="col col-xs-9" style={{ marginLeft: 28 }}>
                        <span>{numfollow}</span>
                    </div>
                </div>
            </div>
            <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>

            <div className="container-fluid" style={{ padding: 10 }}>
                <div className="row">
                    <div className="col col-xs-2">
                        <span style={{ fontWeight: 'bold' }}>numlike</span>
                    </div>
                    <div className="col col-xs-9" style={{ marginLeft: 28 }}>
                        <span>{numlike}</span>
                    </div>
                </div>
            </div>
            <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>

            <div className="container-fluid" style={{ padding: 10 }}>
                <div className="row">
                    <div className="col col-xs-2">
                        <span style={{ fontWeight: 'bold' }}>address</span>
                    </div>
                    <div className="col col-xs-9" style={{ marginLeft: 28 }}>
                        <span>{address}</span>
                    </div>
                </div>
            </div>
            <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>

            <ShowInMap width={935} height={400} position={position}/>
        </div>
    )
}

export default About
