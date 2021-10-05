import { Link } from "react-router-dom";

export default function Nav() {
    
    return (
        <div className='bg-white p-3 row my-nav'>
            <div className='col-md-6'></div>
            <div className='col-md-6 text-right'>
                <Link to='/login' className='btn btn-link text-dark text-decoration-none'>Login</Link>
                <Link to='/register' className='btn btn-link text-dark text-decoration-none'>Register</Link>
            </div>
        </div>
    )

}