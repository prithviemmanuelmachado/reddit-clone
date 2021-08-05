import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './style.module.css';

export default function SearchBar(props)
{
    const {placeholder} = props;
    const [searchTerm, setSearchTerm] = useState("");
    function handleSearch(event)
    {
        setSearchTerm(event.target.value);
    }
    const History = useHistory();
    function onKeyDown(event)
    {
        if(event.key === 'Enter')
        {
            //redirect to search page here
            History.push('/search/'+searchTerm);
        }    
    }
    return<>
        <input type='text' onChange={handleSearch} className={style.searchbar} placeholder={placeholder} onKeyDown={onKeyDown}/>        
    </>
}