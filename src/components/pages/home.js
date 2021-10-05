import React from "react";
import { connect } from "react-redux";
import Card from "../reusables/card";

function Home(props) {

    const arr = props.users;

    let cards = arr.map((val, index) => val.auth ? <Card 
        name={val.name}
        phone={val.phone}
        username={val.username}
        occupation={val.occupation}
        email={val.email}
        key={index}
    /> : ''
    );
    
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



function mapStateToProps(state) {
    return {
        users: state.users,
        redirect: state.redirect
    }
}


export default connect(mapStateToProps) (Home);

