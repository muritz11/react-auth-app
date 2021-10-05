import React from "react";
import Inputs from "../reusables/input";
import Form from "../reusables/form";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addUser, errMsg, succMsg, redir } from "../../actions/action";
import loginImg from "../../vendor/images/Freelancer_re_irh4.svg";

class Signup extends React.Component {

    link = <Link to={'/login'} className='text-dark'>Already a member? Login</Link>;

    //managing input state internally
    state = { name: '', username: '', phone: '', email: '', occupation: '', password: '', re_pwd: '' }

    ifEmpty = function () {
        if (this.state.name !== '' && this.state.username !== '' && this.state.email !== '' && this.state.phone !== '' && this.state.password !== '' && this.state.occupation !== '') {
            return true;
        } else {
            return false;
        }
    }

    errFunc = function (msg) {
        this.props.errMsg(msg);
        setTimeout(() => {
            this.props.errMsg(null);
        }, 5000);
    }

    handleInput = (e) => {
        switch (e.target.id) {
          case 'name':
            this.setState({ name: e.target.value });
            break;
          
          case 'username':
            this.setState({ username: e.target.value });
            break;
          
          case 'email':
            this.setState({ email: e.target.value });
            break;
          
          case 'phone':
            this.setState({ phone: e.target.value });
            break;
  
          case 'occupation':
            this.setState({ occupation: e.target.value });
            break;
  
          case 'password':
            this.setState({ password: e.target.value });
            break;
  
          case 're_pwd':
            this.setState({ re_pwd: e.target.value });
            break;
  
          
          default:
            alert('sorry, unknown field');
            break;
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //run some validations
        if (this.ifEmpty()) {

            const checkUser = this.props.users.some(element => element.username === this.state.username);

            if (checkUser) {
                this.errFunc('Username already exist');
            } else {
                if (this.state.password === this.state.re_pwd) {

                    this.props.addUser(this.state);

                    this.props.succMsg('Registration successful');
                    setTimeout(() => {
                        this.props.succMsg(null);
                        this.setState({ name: '', phone: '', username: '',email: '', password: '', occupation: '' }); 
                        this.props.redir('/login');
                        this.props.redir(null);
                    }, 4000);
            
                } else {
                    this.errFunc('Password does not match repeat password');
                }
            }


  
        
    
        } else {
            this.errFunc('All fields are required');
        }
    }
  
    

    render(){
        if (this.props.redirect) {
            return <Redirect to={ this.props.redirect } />
        } else {
            return (
                <Form title="Sign up" link={this.link} submit={this.handleSubmit} imgSrc={loginImg}>
                    <Inputs name="name" type="text" placeholder="Your Name" change={this.handleInput} val={this.state.name} iconName="user-o" />

                    <Inputs name="username" type="text" placeholder="Your Username" change={this.handleInput} val={this.state.username} iconName="user" />

                    <Inputs name="email" type="email" placeholder="Your Email" change={this.handleInput} val={this.state.email} iconName="inbox" />

                    <Inputs name="occupation" type="text" placeholder="Your occupation" change={this.handleInput} val={this.state.occupation} iconName="briefcase" />

                    <Inputs name="phone" type="tel" placeholder="Your Phone Number" change={this.handleInput} val={this.state.phone} iconName="phone" />

                    <Inputs name="password" type="password" placeholder="Password" change={this.handleInput} val={this.state.password} iconName="lock" />

                    <Inputs name="re_pwd" type="password" placeholder="Repeat your password" iconName="lock" change={this.handleInput} val={this.state.re_pwd} />

                    {/* ok, i have come to an agreement that func component are 10x better than class compnt  */}
                    { this.props.err && <div className='alert alert-danger'>{this.props.err}</div> }
                    { this.props.success && <div className='alert alert-success'>{this.props.success}</div> }
                    
                    <div className="form-group form-button">
                        <input type="submit" name="signup" id="signup" className="form-submit btn btn-success" value="Register"/>
                    </div>
                </Form>
            )
            
        }
    }
    
}

const mapDispatchToProps = {
    addUser,
    errMsg,
    succMsg,
    redir
}

function mapStateToProps(state) {
    return {
        users: state.users,
        err: state.err,
        success: state.success,
        redirect: state.redirect
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Signup);

