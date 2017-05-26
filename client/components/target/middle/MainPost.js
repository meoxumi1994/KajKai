import React from 'react'

import Title from '~/containers/entity/row/Title'
import Normal from '~/containers/entity/row/Normal'
import ImageText from '~/containers/entity/row/ImageText'
import TextImage from '~/containers/entity/row/TextImage'
import GroupImages from '~/containers/entity/row/GroupImages'

const MainPost = ({ onChooseType, list }) => {
    return(
        <div>
            <div className="panel panel-default">
                {list.map((item, index) => {
                    console.log(item, index)
                    switch (item.type) {
                        case 'title':
                            return <Title key={index} id={'mainpost'+sindex}/>
                        default:
                    }
                })}
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
                <Title id={0}/>
                <Normal id={1}/>
                <ImageText id={2}/>
                <TextImage id={3}/>
                <GroupImages id={4}/>
            </div>
        </div>
    )
}

export default MainPost
