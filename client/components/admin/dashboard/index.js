import React from 'react'
import FeedbacksContainer from '~/containers/admin/dashboard/FeedbacksContainer'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getFeedbacks()
    }

    render() {
        const { keyy, mapp, display,
                loadFeedback} = this.props
        return (
            <div className="container" style={{width: '100%', height: '100%'}}>
                <ul className="nav nav-tabs nav-pills">
                    <li className="active">
                        <a data-toggle="tab" href="#new">NEW</a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#solved">SOLVED</a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#all">ALL</a>
                    </li>
                    <button disabled={!display.loadMore} style={{float: 'right', marginTop: 4}} className="btn btn-default" onClick={() => loadFeedback(keyy.all.length)}>{display.loadMore? 'Load more': 'Data is up to date'}</button>
                </ul>
                <div className="tab-content">
                    <div id="new" className="tab-pane fade in active">
                        <FeedbacksContainer myKeyy={keyy.unsolved}/>
                    </div>

                    <div id="solved" className="tab-pane fade">
                        <FeedbacksContainer myKeyy={keyy.solved}/>
                    </div>

                    <div id="all" className="tab-pane fade">
                        <FeedbacksContainer myKeyy={keyy.all}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
