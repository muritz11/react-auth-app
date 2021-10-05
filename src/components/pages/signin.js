import React, { useState } from "react";
import Inputs from "../reusables/input";
import Form from "../reusables/form";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { log, errMsg, succMsg, authUser, redir } from "../../actions/action";
import loginImg from "../../vendor/images/authentication_fsn5.svg";

function Signin(props) {

    let link = <Link to={'/register'} className='text-dark'>Don't have an account? Register here</Link>;

    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');

    function errFunc(msg) {
        props.errMsg(msg);
        setTimeout(() => {
            props.errMsg(null);
        }, 5000);
    }

    
    let handleInput = (e) => {
        switch (e.target.id) {
            case 'username':
            setUser(e.target.value);
            break;
            
            case 'password':
            setPassword(e.target.value);
            break;

            default:
            alert('sorry, unknown field');
            break;
        }
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if (username !== '' && password !== '') {
        
            const checkUser = props.users.find(element => element.username === username);

            if (checkUser) {

                //check password, add user to authenticated users and redirect user to homepage
                if (checkUser.password === password) {
                    props.authUser(checkUser);
                    props.log(true);
                    props.succMsg('Login successful');

                    setTimeout(() => {
                        props.succMsg(null);
                        setUser('');
                        setPassword('');
                        props.redir('/home');
                        props.redir(null);
                    }, 4000);
                } else {
                    errFunc('Incorrect password');
                }
                
            } else {
                errFunc('Username does not exist');
            }
  
            
        } else {
            errFunc('All fields are required');
        }
    }
    
    if (props.redirect) {
        return <Redirect to={ props.redirect } />
    } else {
        return (
            <Form title="Sign in" link={link} submit={handleSubmit} imgSrc={loginImg}>
                <Inputs name="username" type="text" placeholder="Enter your username" iconName="user-o" change={handleInput} val={username} />
                <Inputs name="password" type="password" placeholder="Password" change={handleInput} val={password} iconName="lock" />

                
                { props.err && <div className='alert alert-danger'>{props.err}</div> }
                { props.success && <div className='alert alert-success'>{props.success}</div> }
                
                <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form-submit btn btn-success" value="Login"/>
                </div>
            </Form>
        )
    }
}



function mapStateToProps(state) {
    return {
        users: state.users,
        loggedIn: state.loggedIn,
        err: state.err,
        success: state.success,
        redirect: state.redirect
    }
}

const mapDispatchToProps = {
    log,
    succMsg,
    errMsg,
    authUser,
    redir
}


export default connect(mapStateToProps, mapDispatchToProps) (Signin);

