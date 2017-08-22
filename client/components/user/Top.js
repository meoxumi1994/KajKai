import React from 'react'
import { Link } from 'react-router-dom'

import AddPhoto from '~/containers/entity/thumnail/AddPhoto'
import ModalUploadImage from '~/containers/entity/modal/UploadImage'

const ButtonLine = ({ title, last, link, location, urlname, id }) => {
    return (
        <Link to={"/user/"+id+link}>
            <button type="button" className="btn btn-default"
                style={{ height: 46, width: 90, borderColor: '#DFE0E4', padding: 0,
                borderRadius: 0, borderRightWidth: last, fontSize: 16, outline: 'none' }}>
                {title}
            </button>
            {location.pathname.split('/')[3] == link.split('/')[1] &&
                <img style={{
                    position: 'absolute',
                    marginTop: 38.5,
                    marginLeft: -52,
                    width: 17,
                    height: 9.5,
                    borderColor: 'transparent',
                    backgroundColor: 'transparent',
                }}
                src= "/images/arrowup.svg"/>
            }
        </Link>
    )
}

const Top = (props) => {
    const { yourid, id, coverUrl, avatarUrl, username, onUploadImage, location,
        INTEREST, ABOUT, PHOTOS, SETTING } = props
    return(
        <div style={{ margin: 0,
            backgroundColor: 'white',
            border: '1px solid #DFE0E4',
            borderRadius: '0px 0px 5px 5px',}}>
            {/* <img src={ coverUrl }
            style={{
                width: '100%',
                height: '250px',
                border: 0,
            }}/> */}
            {/* <div className="btn btn-default btn-xs"
                style={{ position: 'fix', marginLeft: -37, marginTop: -210 }}
                onClick={ () => onUploadImage('coverUrl') } >
                <span className="glyphicon glyphicon-camera" style={{ fontSize: 20 }}></span>
            </div> */}
            <div style={{ marginLeft: -1, marginTop: -1 }}>
                <AddPhoto
                    aspectRatio={1038/250}
                    id={2}
                    action={{
                    type: 'UPDATE_USER_COVER'
                    }}
                    canEdit={yourid == id}
                    style={{
                    src: coverUrl,
                    width: 1038,
                    height: 250,
                    isTop: true,
                }}/>
            </div>
            <div style={{
                position: 'relative',
                zIndex: 1,
                float: 'left',
                marginLeft: 13,
                marginTop: -100,
                height: 140,
            }}>
                <div style={{ backgroundColor: 'white',
                    borderRadius: 4,
                    border: '1px solid #DFE0E4',
                    padding: 3, float: 'left',
                    marginTop: -35 }}>
                    <AddPhoto
                        aspectRatio={1}
                        id={3}
                        action={{
                        type: 'UPDATE_USER_AVATAR'
                    }}
                        canEdit={yourid == id}
                        style={{
                        src: avatarUrl,
                        width: 160,
                        height: 160,
                        isTop: false,
                    }}/>
                </div>
                {/* <div className="btn btn-default btn-xs"
                    style={{ position: 'absolute', marginLeft: -30, marginTop: -30 }}
                    onClick={() => onUploadImage('avatarUrl') }
                    >
                    <span className="glyphicon glyphicon-camera" style={{ fontSize: 15 }}></span>
                </div> */}
                <h3 style={{
                    position: 'static',
                    marginTop: 65,
                    marginLeft: 183,
                    color: 'white',
                    textShadow: '2px 2px 4px #000000',
                }}>{ username ? username : "..."}</h3>
                <div style={{
                    position: 'static',
                    marginTop: -2,
                    marginLeft: 183,
                }}>
                    <ButtonLine {...props} title={INTEREST} last="0" link=""/>
                    <ButtonLine {...props} title={ABOUT} last="0" link="/about"/>
                    <ButtonLine {...props} title={PHOTOS} last="0" link="/photo"/>
                    {/* <ButtonLine {...props} title="Post" last="0" link="/post"/> */}
                    {/* <ButtonLine {...props} title="Store" last="0" link="/store"/> */}
                    {/* <ButtonLine {...props} title="Contact" last={(yourid==id)?0:"1px"} link="/contact"/> */}
                    {/* {yourid == id && <ButtonLine {...props} title="Activity" last="0" link="/activity"/> } */}
                    {yourid == id && <ButtonLine {...props} title={SETTING} last="1px" link="/setting"/> }
                </div>
            </div>
            <hr style={{ marginTop: 43, marginBottom: 0, borderColor: 'transparent'}}></hr>
            <ModalUploadImage/>
        </div>
    )
}

export default Top
