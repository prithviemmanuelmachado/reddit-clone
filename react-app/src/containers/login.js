import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../component/input';
import Title from '../component/title';
import Button from '../component/button';
import './style.css';


export default function Login(props)
{
    
    const [username, setUsername] = useState("");
    function handleUsernameChange(event)
    {
        setUsername(event.target.value);
    }
    const [password, setPassword] = useState("");
    function handlePasswordChange(event)
    {
        setPassword(event.target.value);
    }
    function handleOnSubmit(event)
    {
        console.log(username);
        console.log(password);
    }
    return<>
        <div className="loginBox">
            <Title title="LOGIN" aligndir="center"/>
            <InputField placeholder="" displayname='Username' type='text' onChange={handleUsernameChange}/><br/>
            <InputField placeholder="" displayname='Password' type='password' onChange={handlePasswordChange}/><br/><br/>
            <Button buttonType='submit' buttonText='Submit' buttonOrientation='center' onClick={handleOnSubmit} buttonSize='slrg'/><br/><br/>
            <Link className='link' to='/signup'>Click here to Sign Up</Link><br/><br/>
            
        </div>
    </>
    
}
