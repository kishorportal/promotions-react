import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CIcon from '@coreui/icons-react'
import logo from './../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {

    return(
       <div className="c-sidebar c-sidebar-dark c-sidebar-lg-show c-sidebar-fixed c-sidebar-minimized">
           <a className="c-sidebar-brand d-md-down-none active">
               <img src={logo} className="img-brnd"/>
           </a>
           <ul className="c-sidebar-nav h-100">
                <li className="c-sidebar-nav-item">
                   <a className="c-sidebar-nav-link">
                    <FontAwesomeIcon icon={['far', 'circle']} className="c-sidebar-nav-icon" />
                        
                   </a>
                </li>
                <li className="c-sidebar-nav-item">
                   <a className="c-sidebar-nav-link">
                    <FontAwesomeIcon icon={['far', 'circle']} className="c-sidebar-nav-icon" />
                        
                   </a>
                </li>
               <li className="c-sidebar-nav-item">
                   <a className="c-sidebar-nav-link c-active">
                    <FontAwesomeIcon icon={['far', 'circle']} className="c-sidebar-nav-icon" />
                        Promotions
                   </a>
                </li>
            </ul>
       </div>
    )
}

export default React.memo(Sidebar)