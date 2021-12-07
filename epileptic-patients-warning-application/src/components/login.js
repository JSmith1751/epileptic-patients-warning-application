import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import {
    img,
    frmCenter
} from '../components/layout.module.css'
import user from "../images/user.png"
import CollectAllUsers from '../hooks/getAllUsers.js'

function withMyHook(Component) {
    return function WrappedComponent(props) {
        const myHookValue = CollectAllUsers();
        return <Component {...props} myHookValue={myHookValue} />;
    }
}

class Login extends React.Component {
  state = {
    username: ``,
      password: ``,
      data: this.props.myHookValue
      
    }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
    }



    handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
    }

   

    render() {

    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }
    
      return (
        <>
            <img className={img} src={user} alt="icon"></img>
            <form
                method="post"
                onSubmit={event => {
                    this.handleSubmit(event)
                    navigate(`/app/profile`)
                }}
            >
                <div className={frmCenter}>
                    <input type="text" placeholder="Username" name="username" onChange={this.handleUpdate} />
                    <input type="password" placeholder="Password" name="password" onChange={this.handleUpdate} />
                </div>
                <br />
                <div className={frmCenter}>
                    <input type="submit" value="Log In" />
                </div>
            </form>
        </>
    )
  }
}

export default withMyHook(Login)