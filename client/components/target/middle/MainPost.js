import React from 'react'

import Title from '~/containers/entity/row/Title'
import Normal from '~/containers/entity/row/Normal'
import ImageText from '~/containers/entity/row/ImageText'
import TextImage from '~/containers/entity/row/TextImage'
import GroupImages from '~/containers/entity/row/GroupImages'

const MainPost = ({ onChooseType, list, onedit, onSave, onEdit, onItemChange}) => {
    return(
        <div>
            <div className="panel panel-default">
                {onedit?
                    <div className="btn btn-default" onClick={() => onSave()}>save</div>
                :   <div className="btn btn-default" onClick={() => onEdit()}>edit</div>
                }
                {onedit?
                    list.map((item, index) => {
                        switch (item.type) {
                            case 'title':
                                return <Title onChange={(data) => onItemChange(data)} key={index} id={index}/>
                            case 'normal':
                                return <Normal onChange={(data) => onItemChange(data)} key={index} id={index}/>
                            case 'imagetext':
                                return <ImageText onChange={(data) => onItemChange(data)} key={index} id={index}/>
                            case 'textimage':
                                return <TextImage onChange={(data) => onItemChange(data)} key={index} id={index}/>
                            case 'groupimages':
                                return <GroupImages onChange={(data) => onItemChange(data)} key={index} id={index}/>
                            default:
                                return <div></div>
                        }
                    })
                : <div></div>
                }
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
            </div>
        </div>
    )
}

export default MainPost
