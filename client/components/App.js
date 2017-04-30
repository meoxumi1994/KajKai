import React from 'react'
import { Router, Route, hashHistory , browserHistory } from 'react-router'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import BarScreenContainer from '../containers/BarScreenContainer'


const responseFacebook = (response) => {
  console.log(response);
}

const responseGoogleok = (response) => {
  console.log(response,response.tokenId);
}

const responseGoogle = (response) => {
}

class App extends React.Component {
    constructor(props){
        super(props)
    }
    componentClicked(){

    }
    render(){
        return(
            <div>
                <FacebookLogin
                    appId="1146911615435353"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook} />
                <BarScreenContainer/>
                <GoogleLogin
                    clientId="450463283380-skt4llatg404ru1e2ra4hk6c0ie4ei64.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogleok}
                    onFailure={responseGoogle}
                  />
                <hr style={{margin: 0}}></hr>
                { this.props.children }
            </div>
        )
    }
    componentDidMount(){
        this.props.onWho();
    }
}

export default App
