import React from 'react'

import MainPostRow from '~/containers/entity/row/MainPostRow'

class MainPost extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { canedit, onedit, list, onEdit, onSave, onChooseType } = this.props
        return(
            <div className="panel panel-default"
                style={{ minWidth: 540, minheight: 700,  margin: 7}}>
                {canedit && ( onedit?
                    <div className="btn btn-default" onClick={() => onSave()}>save</div>
                :   <div className="btn btn-default" onClick={() => onEdit()}>edit</div> )
                }
                {list.map((item, index) => <MainPostRow key={index} id={item.id} onedit={onedit}/>)
                }
                {onedit &&
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-default btn-sm dropdown-toggle"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          addmore
                          <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a href="#" onClick={() => onChooseType('title')}>title</a></li>
                        <li><a href="#" onClick={() => onChooseType('normal')}>normal</a></li>
                        <li><a href="#" onClick={() => onChooseType('imagetext')}>imagetext</a></li>
                        <li><a href="#" onClick={() => onChooseType('textimage')}>textimage</a></li>
                        <li><a href="#" onClick={() => onChooseType('groupimages')}>groupimages</a></li>
                      </ul>
                    </div>
                }
            </div>
        )
    }
}

export default MainPost
