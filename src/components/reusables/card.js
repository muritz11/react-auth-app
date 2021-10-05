import avatar from "../../images/avatar-icon.svg";


function card(props) {
    
    return (
        <div className="my-card bg-white cont border-0 p-4 m-5 d-sm-inline-block">
                
            <div className="card-content row">
                <div className='col-md-5 img text-center'>
                    <img alt='avatar' src={avatar} />
                    <p className='font-weight mt-3'>{props.username}</p>
                </div>
                <div className='col-md-7'>
                    <div><span className='font-weight mr-5'>Full Name</span> {props.name}</div>
                    <hr />
                    <div><span className='font-weight mr-5'>Email</span> {props.email}</div>
                    <hr />
                    <div><span className='font-weight mr-5'>Phone</span> {props.phone}</div>
                    <hr />
                    <div><span className='font-weight mr-5'>Occupation</span> {props.occupation}</div>
                    <hr />
                </div>
            </div>

        </div>
    )

}

export default card;