import React from 'react'

import ModalUploadImage from '~/containers/entity/modal/UploadImage'

const Top = ({ coverUrl, avatarUrl, name, onUploadImage }) => {
    return(
        <div className="panel panel-default"
            style={{ minWidth: 540, minheight: 700,  margin: 7}}>
            <img src={ coverUrl } alt="Cinque Terre" width="100%" height="180px"
                style={{
                    borderTopRightRadius: 3,
                    borderTopLeftRadius: 3
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
                    style={{ padding: 4, width: 140, height: 140,float: 'left' }}>
                    <img src={ avatarUrl } alt="Cinque Terre" width="100%" height="100%"/>
                </div>
                <div className="btn btn-default btn-xs"
                    style={{ position: 'absolute', marginLeft: -30, marginTop: 5 }}
                    onClick={() => onUploadImage('avatarUrl') }
                    >
                    <span className="glyphicon glyphicon-camera" style={{ fontSize: 15 }}></span>
                </div>
                <h3 style={{
                    position: 'static',
                    marginTop: 110,
                    marginLeft: 145,
                }}>{ name }</h3>
            </div>
            <hr style={{ marginTop: 45, marginBottom: 0}}></hr>
            <ModalUploadImage/>
        </div>
    )
}

export default Top
