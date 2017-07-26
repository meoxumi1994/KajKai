import React from 'react'

class AdminLogin extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let admin
        let password
        const { login } = this.props
        return (
          <div style={{ width: '100%', height: '100%'}}>
              <div style={{backgroundColor: "white", position: "absolute", left: '35%', right: '35%', top: '20%', bottom: '30%'}}>

                  <div style={{ position: "absolute", left: '20%', right: '20%', top: '18%'}}>
                      <img src="./images-admin/kajkai.png" style={{width: 70, height: 70, float: 'left', marginRight: 20, marginLeft: 40}}/>
                      <h3><b>KAJKAI ADMINSTRATION</b></h3>
                  </div>

                  <div style={{ position: "absolute", left: '25%', right: '20%', top: '45%', height: 100}}>
                      <form onSubmit={e => {
                          e.preventDefault()
                          if (admin.value.trim() != '' && password.value.trim() != '') {
                              login(admin.value, password.value)
                          }
                      }}>
                          <input ref={ref => admin = ref} className="form-control" type="text" placeholder="Adminstration" style={{height: 40}}/>
                          <input ref={ref => password = ref} className="form-control" type="password" placeholder="Password" style={{height: 40, marginTop: 10}}/>

                          <button className="btn btn-primary" type="submit" style={{float: 'right', marginTop: 25, width: "100%", height: 40}}>LOGIN</button>
                          <span className="text-help">
                          </span>
                      </form>
                  </div>

              </div>
          </div>
        )
    }
}

export default AdminLogin
