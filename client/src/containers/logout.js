import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Title from '../component/title';
import './style.css';


export default function Login(props)
{
    const History = useHistory();
    const logout = async()=>{
        await fetch('/logout').then((res)=>{
            History.push('/');
            return res.json();

        }).catch(err=>console.log(err));
    };
    useEffect(()=>{
        logout();
    },[]); 
    return<>
        <div className="loginBox">
            <Title title="LOGGING OUT" aligndir="center"/>
        </div>
    </>
    
}
