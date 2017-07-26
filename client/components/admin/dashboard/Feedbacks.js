import React from 'react'
import FeedbackDetailsContainer from '~/containers/admin/dashboard/FeedbackDetailsContainer'

class Feedbacks extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { myKeyy, mapp,
                onDetailsFeedback
              } = this.props

        return (
            <div style={{overflowY: 'scroll', height: 850}}>
                <table className="table table-bordered">
                  <thead className="thead-default">
                      <tr>
                         <th>#</th>
                         <th>Reporter</th>
                         <th>Defendant</th>
                         <th>Content</th>
                         <th>Sellpost</th>
                         <th>Last updated</th>
                         <th>Status</th>
                         <th>Details</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                      myKeyy.map((id, index) =>
                        {
                          const { reporter, defendant, status, time } = mapp[id]
                          return (
                            <tr key={id}>
                               <td>{index + 1}</td>
                               <td>
                                   <img src={reporter.user.avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}/>
                                   {reporter.user.username}
                               </td>
                               <td>
                                   <img src={defendant.user.avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}/>
                                   {defendant.user.username}
                               </td>
                               <td>
                                    {reporter.content}
                               </td>
                               <td>
                                    <p><a href={'https://kajkai.com/sellpost/'+defendant.sellpostId}>Link</a></p>
                               </td>
                               <td>
                                    {Date(time * 1000)}
                               </td>
                               <td>
                                    {
                                      status?
                                      <p style={{color: 'green'}}><b>Solved</b></p>
                                      :
                                      <p style={{color: 'red'}}><b>Unsolved</b></p>
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
              <FeedbackDetailsContainer/>
            </div>
        )
    }
}

export default Feedbacks
