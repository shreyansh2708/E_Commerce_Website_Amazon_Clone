import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from '../firebase';

function Header() {
    const[{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){ //if the user logged in then it will show signOut
            auth.signOut();
        }    
    }
    //line: 37 if there was no user or user was logged out then only redirect to login page
    //line: 43 if user was present then signout will be displayed else signin
    return (
    <div className="header">
        <Link to='/'>
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
        </Link>
        
        <div className="header_option">
            <span className='header_optionLineTwo'>
                 Select an Address
            </span>
        </div>

        <div className="header_search">
            <input className='header_searchInput' type="text" placeholder='Search amazon.in'></input>
            <SearchIcon className='header_serachIcon' />
        </div>
            
        <div className="header_navbar">
        <Link to={!user && "/Login"}> 
            <div onClick={handleAuthentication} className="header_option">
                <span className='header_optionLineOne'>
                    Hello {!user ?'Guest':user.email }
                </span>
                <span className='header_optionLineTwo'>
                    {user? "Sign Out": "Sign In"}
                </span>
            </div>
        </Link>
        <Link to='/orders'>
            <div className="header_option">
                <span className='header_optionLineOne'>
                    Returns
                </span>
                <span className='header_optionLineTwo'>
                    & Orders
                </span>
            </div>
        </Link>
            
            <Link to='/checkout'>
                <div className="header_optionBasket">
                    <ShoppingCartOutlinedIcon />
                    <span className='header_optionLineTwo header_basketText'>
                        Cart ({basket.length})
                    </span>
                </div>
            </Link>
            


        </div>
    </div>
    
    
  )
}

export default Header;