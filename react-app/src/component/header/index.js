import { useState } from 'react';
import style from './style.module.css';
import {Link, useLocation} from 'react-router-dom';
import SearchBar from '../searchbar';

function Header(props)
{
    const [searchTerm, setSearchTerm] = useState("");
    function handleSearch(event)
    {
        setSearchTerm(event.target.value);
        console.log(searchTerm);        
    }
    const curLoc = useLocation();
    const searchbar = curLoc.pathname === "/" || curLoc.pathname ==='/subreddit'? <SearchBar onChange={handleSearch} placeholder='Search'/>: "";
    return<>
        <div className={style.header}>
            <Link className={style.link} to='/'><h2 className={style.headerTitle}>gettit</h2></Link>
            {searchbar}
            <div className={style.navbar}>
                <ul>
                    <Link className={style.link} to='/'><li>HOME</li></Link>
                    <Link className={style.link} to='/login'><li>LOGIN</li></Link>
                </ul>
            </div>
        </div>
        
    </>
}

export default Header;