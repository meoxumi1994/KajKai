import React from 'react'
import { Link } from 'react-router-dom'

import ModalUploadImage from '~/containers/entity/modal/UploadImage'
import AddPhoto from '~/containers/entity/thumnail/AddPhoto'

const ButtonLine = ({ id, location, urlname, title, last, link }) => {
    return (
        <Link to={"/"+urlname + link}>
            <button type="button" className="btn btn-default"
                style={{
                    height: 46, width: 78, borderRadius: 0, borderColor: '#DFE0E4',
                    borderRightWidth: last, fontSize: 16, outline: 'none' }}>
                {title}
            </button>
            {location.pathname.split('/')[2] == link.split('/')[1] &&
                <img style={{
                    position: 'absolute',
                    marginTop: 38.5,
                    marginLeft: -46,
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

class Top extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { id, userid, yourid, coverUrl, avatarUrl, name, onUploadImage, location, isOwner } = this.props
        return(
            <div className="panel panel-default"
                style={{ margin: 0, borderWidth: 1 , borderRadius: '0px 0px 5px 5px'}}>
                {/* <img src={ coverUrl }
                style={{
                    width: '100%',
                    height: '250px',
                    border: 0,
                }}/>
                <div className="btn btn-default btn-xs"
                    style={{ position: 'fix', marginLeft: -37, marginTop: -210 }}
                    onClick={ () => onUploadImage('coverUrl') } >
                    <span className="glyphicon glyphicon-camera" style={{ fontSize: 20 }}></span>
                </div> */}
                <div style={{ marginLeft: -1, marginTop: -1 }}>
                    <AddPhoto
                        aspectRatio={938/250}
                        id={0}
                        action={{
                            type: 'UPDATE_STORE_COVER',
                            data: {
                                id: id,
                            }
                        }}
                        style={{
                        src: coverUrl,
                        width: 938,
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
                            id={1}
                            action={{
                                type: 'UPDATE_STORE_AVATAR',
                                data: {
                                    id: id,
                                }
                            }}
                            canEdit={false}
                            style={{
                            src: avatarUrl,
                            width: 160,
                            height: 160,
                            isTop: false,
                        }}/>
                    </div>
                    {/* <div className="panel panel-default"
                        style={{ padding: 4, width: 170, height: 170, float: 'left', marginTop: -35 }}>
                        <img src={ avatarUrl } alt="Cinque Terre" width="100%" height="100%"/>
                    </div> */}
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
                    }}>{ name }</h3>
                    <div style={{
                        position: 'static',
                        marginTop: -2,
                        marginLeft: 183,
                    }}>
                        <ButtonLine {...this.props} title="Page" last="0" link=""/>
                        <ButtonLine {...this.props} title="About" last="0" link="/about"/>
                        {/* <ButtonLine {...this.props} title="Post" last="0" link="/post"/> */}
                        <ButtonLine {...this.props} title="Photos" last={(userid == yourid) ? 0:'1px'} link="/photo"/>
                        {/* <ButtonLine {...this.props} title="Videos" last="0" link="/video"/> */}
                        {/* <ButtonLine {...this.props} title="Contact" last={(userid == yourid) ? 0:'1px'} link="/contact"/> */}
                        {/* {(userid == yourid) && <ButtonLine {...this.props} title="Activity" last="0" link="/activity"/>} */}
                        {(userid == yourid) && <ButtonLine {...this.props} title="Setting" last="1px" link="/setting"/>}
                    </div>
                </div>
                <hr style={{ marginTop: 43, marginBottom: 0, borderColor: 'transparent'}}></hr>
                <ModalUploadImage/>
                {!isOwner &&
                    <div className="btn btn-default btn-sm"
                        onMouseOver={() => this.setState({ hoverMessage: true })}
                        onMouseLeave={() => this.setState({ hoverMessage: false })}
                        style={{
                            borderWidth: 0,
                            color: 'white',
                            float: 'right',
                            marginRight: 7,
                            marginTop: -37,
                            width: 200,
                            fontSize: 13.5,
                            backgroundColor: this.state.hoverMessage ? '#29487D' : '#4267B2'}}>
                        Send Message
                    </div>
                }
            </div>
        )
    }
}

export default Top
