import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

async function getSearchItems(term, setSearchItems)
{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ searchTerm:term })
    };
    await fetch('/search', requestOptions).then(res=>res.json())
    .then((data)=>{
        setSearchItems(data);
    }).catch(err=>console.log(err));
}

export default function Search(props)
{
    const CurPage = useLocation();
    const curSearchTerm = CurPage.pathname.substr(8);
    const History = useHistory();
    const [searchItems, setSearchItems] = useState([]);
    useEffect(()=>{
        getSearchItems(curSearchTerm, setSearchItems);
    });
    let isEmpty;
    if(searchItems.length === 0)
        isEmpty =<div className='isEmpty'> Nothing found </div>
    else
        isEmpty ='';
    function handleClick(id)
    {
        return function(event)
        {
            History.push('/subreddit/'+id);
        }
    }
    return<>
        <div className='containerMargin'>
            {isEmpty}
            {
                searchItems.map(function(item, index){
                    return<>
                        <div key={item._id} className='searchItems' onClick={handleClick(item._id)}>
                            <img src={'/images/'+item.displayImage} className='displayImages'/>
                            {item.title}
                            <p>{' Followers : '+item.followerCount}</p>
                        </div>
                    </>
                })
            }
        </div>
    </>
}