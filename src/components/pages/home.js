import React from "react";
import { connect } from "react-redux";
import Card from "../reusables/card";
import { Redirect } from "react-router-dom";

function Home(props) {

    const arr = props.auth;

    let cards = arr.map((val, index) =>  <Card 
        name={val.name}
        phone={val.phone}
        username={val.username}
        occupation={val.occupation}
        email={val.email}
        key={index}
    />
    );
    
    if (!props.loggedIn) {
        return <Redirect to='/' ></Redirect>
    } else {
        return (
            <div className='container'>
                <h1 className='text-center'>Welcome back</h1>
                <p className="text-muted text-center">Here are the currently authenticated users</p>
    
                <div>
                    {cards}
                </div>
            </div>
        )
    }


}



function mapStateToProps(state) {
    return {
        auth: state.auth,
        redirect: state.redirect,
        loggedIn: state.loggedIn
    }
}


export default connect(mapStateToProps) (Home);

