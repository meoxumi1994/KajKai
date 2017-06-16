import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import App from '~/containers/App'

class Comp extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const listpost = []
        console.log('listpost = []')
        return(
            <div style={{ height: '100%'}}>
                <div style={{ position: 'fixed', zIndex: 1, right: 0, top: 0, width: '100%', backgroundColor: 'blue', height: 48}}>
                </div>
                <div ref={ (scroll) => this.scroll = scroll }
                    onScroll={(e) => console.log('onScroll',
                    this.scroll.scrollTop,
                    this.sellpost.getBoundingClientRect().bottom - this.scroll.clientHeight - 48 )}
                    style={{ height: 'calc(100% - 48px)', backgroundColor: 'red'}}>
                    <div style={{ position: 'fixed',right: 0, top: 48, height: '100%', width: 280}}>

                    </div>
                    <div style={{ marginRight: 280}}>
                        <div style={{ width: 1050, margin: 'auto', backgroundColor: 'yellow'}}>
                            <div>
                                <div style={{ marginLeft: 170, float: 'left', width: 880}}>
                                    <div className="panel panel-default" style={{ height: 300, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-xs-2">
                                    123123123
                                </div>
                                <div ref={ sellpost => this.sellpost = sellpost}
                                    className="col col-xs-5">
                                    <div style={{ position: 'fixed' }}>
                                        <div className="panel panel-default" style={{ height: 800,margin: '10px 0px 0px 0px'}}>
                                            123123123
                                        </div>
                                        <div
                                            className="panel panel-default" style={{ height: 800 ,margin: '10px 0px 0px 0px'}}>
                                            123123123
                                        </div>
                                        <div className="panel panel-default" style={{ height: 800,margin: '10px 0px 0px 0px'}}>
                                            123123123
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xs-5">
                                    <div className="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div className="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div className="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div className="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div className="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div className="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div className="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const Components = () => (
    <BrowserRouter>
        <div>
            <Route path="*" component={App}/>
        </div>
    </BrowserRouter>

)

// getBoundingClientRect
// scrollTop

export default Components
