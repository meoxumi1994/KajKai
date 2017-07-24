import React from 'react'
import FeedbackDetailsContainer from '~/containers/admin/dashboard/FeedbackDetailsContainer'

class Feedbacks extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { keyy, mapp,
                onDetailsFeedback
              } = this.props
        return (
            <div>
                <table className="table table-bordered">
                  <thead className="thead-default">
                      <tr>
                         <th>#</th>
                         <th>Reporter</th>
                         <th>Defendant</th>
                         <th>Reason</th>
                         <th>Time</th>
                         <th>Status</th>
                         <th>Details</th>
                      </tr>
                  </thead>
                  <tbody>
                    <FeedbackDetailsContainer/>
                      {
                      keyy.map((id, index) =>
                        {
                          const {  reporter, defendant, reason, time, status } = mapp[id]
                          return (
                            <tr key={id}>
                               <td>{index}</td>
                               <td>
                                   <img src={reporter.avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}/>
                                   {reporter.username}
                               </td>
                               <td>
                                   <img src={defendant.avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}/>
                                   {defendant.username}
                               </td>
                               <td>
                                    {reason}
                               </td>
                               <td>
                                    {Date(time * 1000)}
                               </td>
                               <td>
                                    {
                                      status?
                                      <p style={{color: 'green'}}>Solved</p>
                                      :
                                      <p style={{color: 'red'}}>Unsolved</p>
                                    }
                               </td>
                               <td>
                                  <button className="btn btn-default" onClick={() => onDetailsFeedback(id)}>
                                      DETAILS
                                  </button>
                               </td>
                            </tr>
                          )
                        }
                      )
                    }
                  </tbody>
                </table>
            </div>
        )
    }
}

export default Feedbacks
