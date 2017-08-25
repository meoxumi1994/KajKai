import React from 'react'
import { Link } from 'react-router-dom'

import ModalUploadImage from '~/containers/entity/modal/UploadImage'
import AddPhoto from '~/containers/entity/thumnail/AddPhoto'

const ButtonLine = ({ id, location, urlname, title, last, link }) => {
    return (
        <Link to={"/"+urlname + link}>
            <button type="button" className="btn btn-default"
                style={{
                    height: 45, width: 90, borderRadius: 0, borderColor: '#DFE0E4', padding: 0, borderTopWidth: 0,
                    borderRightWidth: last, fontSize: 16, outline: 'none' }}>
                {title}
            </button>
            {location.pathname.split('/')[2] == link.split('/')[1] &&
                <img style={{
                    position: 'absolute',
                    marginTop: 37.5,
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

class Top extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { id, userid, yourid, coverUrl, avatarUrl, name, onUploadImage, location, isOwner, beFollow, onFollow, sendMessage, userInfo,
            PAGE, ABOUT, PHOTOS, FOLLOW_US, FOLLOWED, STATISTIC, SETTING, SEND_MESSAGE } = this.props
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
                <div style={{ marginLeft: 0, marginTop: -1 }}>
                    <AddPhoto
                        aspectRatio={838/250}
                        id={0}
                        action={{
                            type: 'UPDATE_STORE_COVER',
                            data: {
                                id: id,
                            }
                        }}
                        canEdit={isOwner}
                        style={{
                        src: coverUrl,
                        width: 838,
                        height: 250,
                        isTop: true,
                    }}/>
                </div>
                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    float: 'left',
                    marginTop: -100,
                    height: 140,
                }}>
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

                    <div style={{
                        position: 'static',
                        marginTop: 100,
                        marginLeft: 190,
                    }}>
                        {(!isOwner && yourid ) &&
                            <div className="btn btn-default btn-sm"
                                onClick={() => onFollow()}
                                style={{
                                    marginLeft: -180, marginRight: 40, width: 170, padding: 5 }}>
                                <img src={ beFollow ? "/images/hasfollowstore.svg" : "/images/followstore.svg" } width={16} height={16}/>
                                <span style={{ marginLeft: 10,
                                    color:  beFollow ? '#D0021B' : '#4B4F56',
                                    fontWeight: 'bold'
                                }}>
                                    { beFollow ? FOLLOWED : FOLLOW_US }
                                </span>
                            </div>
                        }
                        <ButtonLine {...this.props} title={PAGE} last="0" link=""/>
                        <ButtonLine {...this.props} title={ABOUT} last="0" link="/about"/>
                        {/* <ButtonLine {...this.props} title="Post" last="0" link="/post"/> */}
                        <ButtonLine {...this.props} title={PHOTOS} last={(userid == yourid) ? 0: '1px'} link="/photo"/>
                        {/* <ButtonLine {...this.props} title="Videos" last="0" link="/video"/> */}
                        {/* <ButtonLine {...this.props} title="Contact" last={(userid == yourid) ? 0:'1px'} link="/contact"/> */}
                        {/* {(userid == yourid) && <ButtonLine {...this.props} title="Activity" last="0" link="/activity"/>} */}
                        {(userid == yourid) && <ButtonLine {...this.props} title={STATISTIC} last={0} link="/statistic"/>}
                        {(userid == yourid) && <ButtonLine {...this.props} title={SETTING} last="1px" link="/setting"/>}
                    </div>
                </div>
                <hr style={{ marginTop: 43, marginBottom: 0, borderColor: 'transparent'}}></hr>
                <ModalUploadImage/>
                {(!isOwner && yourid) &&
                    <div className="btn btn-default btn-sm"
                        onClick={() => sendMessage(id, yourid, userid)}
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
                            backgroundColor: this.state.hoverMessage ? '#29487D' : '#4267B2', fontWeight: 600 }}>
                        {SEND_MESSAGE}
                    </div>
                }
            </div>
        )
    }
}

export default Top
