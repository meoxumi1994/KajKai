import React from 'react'
import FeedbackDetailsContainer from '~/containers/admin/dashboard/FeedbackDetailsContainer'
import { link } from '~/components/admin/common/config'
import { Table } from 'react-bootstrap'

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
              <Table striped bordered condensed hover>
                  <thead className="thead-default">
                      <tr>
                         <th>#</th>
                         <th style={{width: 250, marginLeft: 20}}>Reporter</th>
                         <th style={{width: 250, marginLeft: 20}}>Defendant</th>
                         <th>Content</th>
                         <th style={{textAlign: 'center', width: 70}}>Sellpost</th>
                         <th style={{textAlign: 'center', width: 100}}>Last updated</th>
                         <th style={{textAlign: 'center', width: 70}}>Status</th>
                         <th style={{textAlign: 'center', width: 70}}>Details</th>
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
                                   <a href={link.user(reporter.user.id)}>{reporter.user.username}</a>
                               </td>
                               <td>
                                   <img src={defendant.user.avatarUrl} style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}/>
                                   <a href={link.user(defendant.user.id)}>{defendant.user.username}</a>
                               </td>
                               <td>
                                    {reporter.content}
                               </td>
                               <td style={{textAlign: 'center'}}>
                                    <p><a href={link.sellpost(defendant.sellpostId)} to="_blank">Link</a></p>
                               </td>
                               <td style={{textAlign: 'center'}}>
                                    {
                                      (new Date(time * 1000)).toLocaleString()
                                    }
                               </td>
                               <td style={{textAlign: 'center'}} onClick={() => onDetailsFeedback(id)}>
                                    {
                                      status?
                                      <img src='./images-admin/tick.png' style={{width: 25, height: 25}}/>
                                      :
                                      <img src='./images-admin/untick.png' style={{width: 20, height: 20}}/>
                                    }
                               </td>
                               <td style={{textAlign: 'center'}}>
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
                </Table>
              <FeedbackDetailsContainer/>
            </div>
        )
    }
}

// <p style={{color: 'green'}}><b>Solved</b></p>
// <p style={{color: 'red'}}><b>Unsolved</b></p>
export default Feedbacks
