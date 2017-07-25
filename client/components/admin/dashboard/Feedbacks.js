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
                         <th>Content</th>
                         <th>Sellpost</th>
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
                          const { reporter, defendant, status, time } = mapp[id]
                          return (
                            <tr key={id}>
                               <td>{index}</td>
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
