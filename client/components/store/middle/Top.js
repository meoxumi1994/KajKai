import React from 'react'

const Top = ({ storename, coverUrl, avatarUrl, onChangeImage }) => {
    return(
        <div className="panel panel-default">
            <div>
                <img src={coverUrl} style={{ width: '100%', height: 200 }}/>
                <div className="btn btn-default btn-xs" onClick={() => onChangeImage('coverUrl')}
                    style={{ position: 'absolute', marginTop: 5, marginLeft: -35 }}>
                    <span className="glyphicon glyphicon-camera" style={{ fontSize: 20 }}></span>
                </div>
                <img src={avatarUrl}
                    style={{ width: 150, height: 150, padding: 5, borderRadius: 5, backgroundColor: 'white',
                        marginLeft: 10, marginTop: -75, position: 'static'}}
                />
                <div className="btn btn-default btn-xs" onClick={() => onChangeImage('avatarUrl')}
                    style={{ position: 'absolute', marginTop: -70, marginLeft: -32 }}>
                    <span className="glyphicon glyphicon-camera" style={{ fontSize: 15 }}></span>
                </div>
                <h3 style={{ display: 'inline' }}>{storename}</h3>
            </div>
            <hr style={{ margin: 0, padding: 0}}/>
        </div>
    )
}

export default Top
