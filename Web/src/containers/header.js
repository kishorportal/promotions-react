import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CIcon from '@coreui/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// routes config
import routes from '../routes'

const Header = () => {

    return (
        <header className="c-header c-header-light c-header-fixed c-header-with-subheader">
            <div className="row m-0 col-md-12">
                <div className="col-sm-1 pt-2">
                    <div className="text-muted">Balance</div>
                    <h6>213920 <FontAwesomeIcon icon="dollar-sign" /></h6>
                </div>
                <div className="col-sm-1 pt-2">
                    <div className="text-muted">Payout</div>
                    <h6>159465 <FontAwesomeIcon icon="dollar-sign" /></h6>
                </div>
            </div>
           {/* <button className="c-header-toggler ml-3 d-md-down-none" type="button">
               <span className="c-header-toggler-icon"></span>
            </button>
            <ul className="d-md-down-none mr-auto c-header-nav">
                <li className="px-3 c-header-nav-item"><a className="c-header-nav-link active" href="#/dashboard" aria-current="page">Dashboard</a></li>
                <li className="px-3 c-header-nav-item"><a className="c-header-nav-link" href="#/users">Users</a></li>
                <li className="px-3 c-header-nav-item"><a href="#" className="c-header-nav-link">Settings</a></li>
            </ul> */}
        </header>
    )
}
export default Header