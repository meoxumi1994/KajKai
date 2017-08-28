import React from 'react'

import ShowInMap from '~/containers/entity/map/ShowInMap'
import AboutCell from '~/containers/entity/row/AboutCell'
import { getTime } from '~/containers/support'


const getNameCurrentCategory = (currentCategoryId, { language, categories, STORE, USER, ALL_CATEGORY }) => {
    if(currentCategoryId == -1){
        return ALL_CATEGORY
    }
    if(currentCategoryId == -2){
        return STORE
    }
    if(currentCategoryId == -3){
        return USER
    }
    let name = ""
    categories.map(category => {
        if(currentCategoryId == category.id)
            name = (language == 'en') ? category.enName : category.name
        category.secondCategories.map(second => {
            if( second.id  == currentCategoryId )
                name = (language == 'en') ? second.enName : second.name
        })
    })
    return name
}


class About extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { category, firstCategoryId, secondCategoryId, urlname, phone, storename, numfollow, numlike,  address, position,
            email, CATEGORY, URL_NAME, USER_NAME, STORE_NAME, EMAIL, LANGUAGE, ADDRESS, PHONE, AGE, INFO_GENERAL, POSITION_IN_MAP, INTERACTION,
            TOTAL_LIKE, TOTAL_COMMENT, TOTAL_REPLY_COMMENT, TOTAL_FOLLOW, CREATE_TIME, LAST_TIME } = this.props
        return(
            <div>
                <div style={{
                    borderRadius: 4,
                    border: '1px solid #DFE0E4',
                    // boxShadow: '0px 0px 4px #CCCCCC',
                    backgroundColor: 'white',
                    width: 838, marginTop: 10,
                    }}>
                    <div style={{ fontSize: 20, padding: 10, backgroundColor: '#F6F7F9', borderRadius: '5px 5px 0px 0px'}}>
                        <img src={"/images/inforicon.svg"} width={20} height={20}/>
                        <span style={{ marginLeft: 10 }}>{INFO_GENERAL}</span>
                    </div>
                    <hr style={{ margin: 0, padding: 0 }}/>
                    <AboutCell kind="storename" title={STORE_NAME} value={storename}/>
                    <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                    <AboutCell kind="kajkai" title={URL_NAME} value={"https://www.kajkai.com/"+urlname}/>
                    <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                    <AboutCell kind="category" title={CATEGORY} value={
                        getNameCurrentCategory(firstCategoryId, this.props) + " . " +
                        getNameCurrentCategory(secondCategoryId, this.props) + " . " + category}/>
                    <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                    <AboutCell kind="email" title={EMAIL} value={email}/>
                    <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                    <AboutCell kind="address" title={ADDRESS} value={address}/>
                    <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                    <AboutCell kind="phone" title={PHONE} value={phone}/>
                    <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                    <AboutCell kind="position" title={POSITION_IN_MAP} value={position}/>
                </div>

                <div style={{
                    borderRadius: 4,
                    border: '1px solid #DFE0E4',
                    backgroundColor: 'white',
                    width: 838, marginTop: 10,
                    }}>
                    <div style={{ fontSize: 20, padding: 10, backgroundColor: '#F6F7F9', borderRadius: '5px 5px 0px 0px'}}>
                        <img src={"/images/interactiveicon.svg"} width={22} height={22}/>
                        <span style={{ marginLeft: 10 }}>{INTERACTION}</span>
                    </div>
                    <hr style={{ margin: 0, padding: 0 }}/>
                    {/* <AboutCell kind="leadercomment" title={TOTAL_COMMENT} value={interactive.numleadercomment}/>
                    <AboutCell kind="comment" title={TOTAL_REPLY_COMMENT} value={interactive.numcomment}/> */}
                    <AboutCell kind="like" title={TOTAL_LIKE} value={numlike}/>
                    <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                    <AboutCell kind="follow" title={TOTAL_FOLLOW} value={numfollow}/>
                    {/* <AboutCell kind="create_time" title={CREATE_TIME} value={getTime(interactive.create_time)}/>
                    <AboutCell kind="last_time" title={LAST_TIME} value={getTime(interactive.last_time)}/> */}
                </div>
                {/* <div className="container-fluid" style={{ padding: 10 }}>
                    <div className="row">
                        <div className="col col-xs-2">
                            <span style={{ fontWeight: 'bold' }}>Category 1</span>
                        </div>
                        <div className="col col-xs-9" style={{ marginLeft: 28 }}>
                            <span>{firstCategory}</span>
                        </div>
                    </div>
                </div>
                <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>

                <div className="container-fluid" style={{ padding: 10 }}>
                    <div className="row">
                        <div className="col col-xs-2">
                            <span style={{ fontWeight: 'bold' }}>Category 2</span>
                        </div>
                        <div className="col col-xs-9" style={{ marginLeft: 28 }}>
                            <span>{secondCategory}</span>
                        </div>
                    </div>
                </div> */}

            </div>
        )
    }
}

export default About
