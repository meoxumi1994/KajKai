import React from 'react'
import ShowInMap from '~/containers/entity/map/ShowInMap'

class AboutCell extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { title, kind, value } = this.props
        if( value == undefined || title == undefined)
            return (
                <div></div>
            )
        return(
            <div className="container-fluid" style={{ padding: 10 }}>
                <div className="row">
                    <div className="col col-xs-3">
                        <img src={"/images/"+kind+"icon.svg"} width={20} height={20}/>
                        <span style={{ marginLeft: 10 }}>{title}</span>
                    </div>
                    <div className="col col-xs-9">
                        {(kind != 'position') ?
                            <span style={{ marginLeft: 10 }}>{value}</span>
                        :   <div style={{ paddingLeft: 10 }}>
                                {value.lat && <ShowInMap position={value} width={670} height={400} canEdit={false}/>}
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutCell
