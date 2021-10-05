import React from "react";

export default function Form(props) {

    return (

        <section className="signup">
            <div className="container p-5 bg-white">
                <div className="signup-content row">
                    <div className="signup-form col-md-6">
                        <h2 className="form-title my-4">{props.title}</h2>
                        <form onSubmit={props.submit} className="register-form" id="register-form">
                            {props.children}
                        </form>
                    </div>
                    <div className="col-md-6 fig">
                        <figure><img src={props.imgSrc} alt="" /></figure>
                        {props.link}
                    </div>
                </div>
            </div>
        </section>

    )

}