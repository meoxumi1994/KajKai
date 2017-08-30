import React from 'react'

import  { Line } from 'react-chartjs'

const options =  {
  scaleFontColor: "#5588e7",
  scaleLineColor: "#3B5998",
    scales: {
        yAxes: [{
            ticks: {
                // beginAtZero:true
            }
        }]
    }
}

const getLabel = (current, numday ) => {
    let labels = []
    for(let i=0; i<=numday; i++){
        let j = new Date(current)
        j.setDate( current.getDate() - i)
        labels = [
            j.getDate() + " " + j.toLocaleString("en-us", { month: "long" }),
            ...labels,
        ]
    }
    return labels
}

class Statistic extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { current, numday, statistics, onChange, myState, STATISTIC, PREVIOUS, NEXT, WEEK, WEEKS, MONTH } = this.props
        const data = {
            labels: getLabel(current, numday),
            datasets: [{
                label: '# of Votes',
                data: statistics,
            }]
        }
        return(
            <div className="panel panel-default" style={{ margin: 0, marginTop: 10, }}>
                <div style={{ padding: 10, borderRadius: '3px 3px 0px 0px', fontSize: 18, backgroundColor: '#F6F7F9'}}>
                    <img src={"/images/statisticicon.svg"} width={20} height={20}/>
                    <span style={{ marginLeft: 10 }}>{STATISTIC}</span>
                </div>
                <div style={{ padding: '0px 10px 10px 10px'}}>
                    <div style={{ padding: 10 }}>
                        {myState != 'GET_STORE_STATICTIS_ING' ?
                            <div style={{ width: 815, height: 520 }}>
                                <Line data={data} options={options} width="805" height="500"/>
                            </div>
                        :   <div style={{ width: 815, height: 520 }}></div>
                        }
                    </div>
                    <div className="btn btn-default btn-sm"
                        onClick={() => {
                            let newcurrent = new Date(current)
                            newcurrent.setDate( current.getDate() - numday )
                            onChange('current', newcurrent )
                        }}>
                        {PREVIOUS}
                    </div>
                    <div className="btn btn-default btn-sm"
                        onClick={() => {
                            let newcurrent = new Date(current)
                            newcurrent.setDate( current.getDate() + numday )
                            if(newcurrent > (new Date()))
                                onChange('current', new Date())
                            else
                                onChange('current', newcurrent)
                        }} style={{ marginLeft: 10 }}>
                        {NEXT}
                    </div>
                    <div style={{ float: 'right'}}>
                        <div className="btn btn-default btn-sm"
                            onClick={() => onChange('numday', 7)}>
                            1 {WEEK}
                        </div>
                        <div className="btn btn-default btn-sm"  style={{ marginLeft: 5 }}
                            onClick={() => onChange('numday', 14)}>
                            2 {WEEKS}
                        </div>
                        <div className="btn btn-default btn-sm"  style={{ marginLeft: 5 }}
                            onClick={() => onChange('numday', 30)}>
                            1 {MONTH}
                        </div>
                        {/* <div className="btn btn-default btn-sm"  style={{ marginLeft: 5 }}>
                            3 month
                        </div>
                        <div className="btn btn-default btn-sm"  style={{ marginLeft: 5 }}>
                            6 month
                        </div>
                        <div className="btn btn-default btn-sm"  style={{ marginLeft: 5 }}>
                            1 years
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.onGetStatistic()
    }
}

export default Statistic
