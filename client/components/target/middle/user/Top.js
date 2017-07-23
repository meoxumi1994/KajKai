import React from 'react'
import { Link } from 'react-router-dom'

import ModalUploadImage from '~/containers/entity/modal/UploadImage'

const Top = (props) => {
    const { id, coverUrl, avatarUrl, name, onUploadImage } = props
    const ButtonLine = ({ title, last, link }) => {
        return (
            <Link to={"/"+id+link}>
                <button type="button" className="btn btn-default"
                    style={{ height: 46, borderRadius: 0, borderRightWidth: last, fontSize: 16 }}>
                    {title}
                </button>
            </Link>
        )
    }

    return(
        <div className="panel panel-default"
            style={{ width: 850, minheight: 700,  margin: 7, borderWidth: 0 }}>
            <img src={ coverUrl }
            style={{
                width: '100%',
                height: '250px',
                border: 0,
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
            }}/>
            <div className="btn btn-default btn-xs"
                style={{ position: 'absolute', marginLeft: -37, marginTop: 5 }}
                onClick={ () => onUploadImage('coverUrl') } >
                <span className="glyphicon glyphicon-camera" style={{ fontSize: 20 }}></span>
            </div>
            <div style={{
                position: 'relative',
                float: 'left',
                marginLeft: 13,
                marginTop: -100,
                height: 140,
            }}>
                <div className="panel panel-default"
                    style={{ padding: 4, width: 170, height: 170, float: 'left', marginTop: -35 }}>
                    <img src={ avatarUrl } alt="Cinque Terre" width="100%" height="100%"/>
                </div>
                <div className="btn btn-default btn-xs"
                    style={{ position: 'absolute', marginLeft: -30, marginTop: -30 }}
                    onClick={() => onUploadImage('avatarUrl') }
                    >
                    <span className="glyphicon glyphicon-camera" style={{ fontSize: 15 }}></span>
                </div>
                <h3 style={{
                    position: 'static',
                    marginTop: 65,
                    marginLeft: 183,
                }}>{ name }</h3>
                <div style={{
                    position: 'static',
                    marginTop: -2,
                    marginLeft: 183,
                }}>
                    <ButtonLine title="Interest" last="0" link=""/>
                    <ButtonLine title="About" last="0" link="/about"/>
                    <ButtonLine title="Post" last="0" link="/post"/>
                    <ButtonLine title="Store" last="0" link="/store"/>
                    <ButtonLine title="Contact" last="0" link="/contact"/>
                    <ButtonLine title="Activity" last="0" link="/activity"/>
                    <ButtonLine title="Setting" last="1px" link="/setting"/>
                </div>
            </div>
            <hr style={{ marginTop: 43, marginBottom: 0, borderColor: 'white'}}></hr>
            <ModalUploadImage/>
        </div>
    )
}

export default Top
