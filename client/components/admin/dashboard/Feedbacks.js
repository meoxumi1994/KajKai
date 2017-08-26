import React from 'react'
import FeedbackDetailsContainer from '~/containers/admin/dashboard/FeedbackDetailsContainer'
import { link } from '~/components/admin/common/config'

class Feedbacks extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { myKeyy, mapp,
                onDetailsFeedback
              } = this.props


        if (myKeyy.length == 0) {
            return (
                <div style={{textAlign: 'center', marginTop: 10}}>No feedback</div>
            )
        }

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
                               <td style={{width: 150}}>
                                   <img src={reporter.user.avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}/>
                                   <a href={link.user(reporter.user.id)}>{reporter.user.username}</a>
                               </td>
                               <td style={{width: 150}}>
                                   <img src={defendant.user.avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}/>
                                   <a href={link.user(defendant.user.id)}>{defendant.user.username}</a>
                               </td>
                               <td>
                                    {reporter.content}
                               </td>
                               <td>
                                    <p><a href={link.sellpost(defendant.sellpostId)} to="_blank">Link</a></p>
                               </td>
                               <td>
                                    {
                                      (new Date(time * 1000)).toLocaleString()
                                    }
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
                                  <button className="btn btn-default" onClick={() => onDetailsFeedback(id)} style={{fontSize: 11}}>
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
