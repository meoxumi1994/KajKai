import React from 'react'

class Feedbacks extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { keyy, mapp } = this.props
        return (
            <table className="table table-bordered">
              <thead className="thead-default">
                  <tr>
                     <th>#</th>
                     <th>Reporter</th>
                     <th>Defendant</th>
                     <th>Reason</th>
                     <th>Time</th>
                     <th>Status</th>
                     <th>Action</th>
                  </tr>
              </thead>
              <tbody>
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
                              <button className="btn btn-default">
                                  ACTION
                              </button>
                           </td>
                        </tr>
                      )
                    }
                  )
                }
              </tbody>
            </table>
        )
    }
}

export default Feedbacks
