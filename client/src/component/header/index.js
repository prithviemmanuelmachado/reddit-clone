import { useEffect, useState } from 'react';
import style from './style.module.css';
import {Link, useLocation} from 'react-router-dom';
import SearchBar from '../searchbar';


function Header(props)
{
    const [isLoggedIn, setIsLoggedIn] = useState("");
    const verify = async() => {
        await fetch('/verify').then(res => {
            return res.json()
        }).then(data =>{
            setIsLoggedIn(data.isLoggedIn);
        }).catch(err=>console.log(err));
    }
    useEffect(()=>{
        verify();
    });
    
    
    const curLoc = useLocation();
    const searchbar = curLoc.pathname !== "/login" && curLoc.pathname !=="/signup"? <SearchBar placeholder='Search'/>: "";
    const createNewSubreddit = curLoc.pathname !== "/login" && curLoc.pathname !=="/signup" && curLoc.pathname !=="/newSubreddit"?<Link className={style.link} to='/newSubreddit'><li>Create Subreddit</li></Link>:'';

    const loginBtn = isLoggedIn ? <Link className={style.link} to='/logout'><li>LOGOUT</li></Link> : <Link className={style.link} to='/login'><li>LOGIN</li></Link>;
    return<>
        <div className={style.header}>
            <Link className={style.link} to='/'><h2 className={style.headerTitle}>gettit</h2></Link>
            {searchbar}
            <div className={style.navbar}>
                <ul>
                    {createNewSubreddit}
                    <Link className={style.link} to='/'><li>HOME</li></Link>
                    {loginBtn}
                </ul>
            </div>
        </div>
        
    </>
}

export default Header;