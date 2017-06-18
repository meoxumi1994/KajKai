import React from 'react';

import Top from '~/containers/target/middle/store/Top'
import Post from '~/containers/target/middle/store/Post'

const Store = ({ id, height, scrollTop, scrollLeft, sellposts, minorposts, onNeedSellPost, onNeedMinorPost}) => {
    let sellpost_marginTop = 0
    let minorpost_marginTop = 0
    console.log('scrollLeft', scrollLeft)
    if(this.sellpost){
        sellpost_marginTop = height - this.sellpost.getBoundingClientRect().bottom > 0
        if(this.sellpost.getBoundingClientRect().bottom - height < 780)
            onNeedSellPost()
    }
    if(this.minorpost){
        minorpost_marginTop = height - this.minorpost.getBoundingClientRect().bottom > 0
        if(this.minorpost.getBoundingClientRect().bottom - height < 780)
            onNeedMinorPost()
    }
    return(
        <div>
            <div style={{ marginLeft: 160, float: 'left', width: 940 }}>
                <Top/>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-xs-2">
                    </div>
                    <div ref={ sellpost => this.sellpost = sellpost }
                        className="col col-xs-6"
                        style={{
                            height: this.sellpost_inside_height?this.sellpost_inside_height.offsetHeight: undefined,
                            margin: 0,
                            padding: 0,
                        }}
                        >
                        <div ref= { sellpost_inside => { this.sellpost_inside_height = sellpost_inside } }
                            style={{
                            position: sellpost_marginTop?'fixed':'static',
                            marginLeft: sellpost_marginTop?(-scrollLeft-24):-24,
                            marginTop: sellpost_marginTop?(-this.sellpost_inside_height.offsetHeight + height - 343):0,
                            width: 530 }}>
                            {sellposts.map((item, index) =>
                                <div key={index} className="panel panel-default"
                                    style={{ height: 600,margin: '10px 0px 0px 0px'}}>
                                    123123123
                                </div>
                            )}
                            <span id="loaderr"></span>
                        </div>
                    </div>
                    <div ref={ minorpost => this.minorpost = minorpost }
                        className="col col-xs-4"
                        style={{
                            height: this.minorpost_inside_height?this.minorpost_inside_height.offsetHeight: undefined,
                            margin: 0,
                            padding: 0,
                        }}>
                        <div ref= { minorpost_inside => { this.minorpost_inside_height = minorpost_inside } }
                            style={{
                            position: minorpost_marginTop?'fixed':'static',
                            marginLeft: minorpost_marginTop?(-scrollLeft-33):-33,
                            marginTop: minorpost_marginTop?(-this.minorpost_inside_height.offsetHeight + height - 343):0,
                            width: 400 }}>
                            {minorposts.map((intem,index) =>
                                <div key={index} className="panel panel-default"
                                    style={{ height: 400,margin: '10px 0px 0px 0px'}}>
                                    123123123
                                </div>
                            )}
                            <div id="loaderr"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store
