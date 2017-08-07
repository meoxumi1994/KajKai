import React from 'react'

import  { Line } from 'react-chartjs'

const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}

const options =  {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}

class Statistic extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="panel panel-default" style={{ margin: 0, marginLeft: -23, marginTop: 10, }}>
                <div style={{ padding: 10, borderRadius: '3px 3px 0px 0px', fontSize: 18, backgroundColor: '#F6F7F9'}}>
                    Statistic
                </div>
                <div style={{ padding: 10 }}>
                    <Line data={data} options={options} width="915" height="300"/>
                </div>
                <div className="btn btn-default btn-sm">
                    previous
                </div>
                <div className="btn btn-default btn-sm">
                    next
                </div>
                <div marginLeft="" className="btn btn-default btn-sm">
                    1 week
                </div>
                <div className="btn btn-default btn-sm">
                    3 weeks
                </div>
                <div className="btn btn-default btn-sm">
                    1 mounth
                </div>
                <div className="btn btn-default btn-sm">
                    3 mounth
                </div>
                <div className="btn btn-default btn-sm">
                    6 mounth
                </div>
                <div className="btn btn-default btn-sm">
                    1 years
                </div>
            </div>
        )
    }
}

export default Statistic
