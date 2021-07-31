import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputField from '../component/input';
import Title from '../component/title';
import Button from '../component/button';
import './style.css';


export default function Login(props)
{
    const History = useHistory();
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
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
        const data = {
            username : username,
            password : password
        };
        if(username || password )
        {
            setPasswordError("");
            setUsernameError("");
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                credentials : 'include'
            };
            
            fetch('/login', requestOptions)
            .then(res => {
                return res.json()
            }).then(data => {
                console.log(data._id);
                if(data.error)
                    setUsernameError(<p className="error">{data.error}</p>);
                else
                    History.push('/');                        
            })
            .catch(err => console.log(err));
        }       
        else
        {
            if(!username)
                setUsernameError(<p className="error">Enter Username</p>);
            if(!password)
                setPasswordError(<p className="error">Enter Passwords</p>);
            
        }

    }
    return<>
        <div className="loginBox">
            <Title title="LOGIN" aligndir="center"/>

            <div className='errorField'>
                <InputField placeholder="" displayname='Username' type='text' onChange={handleUsernameChange}/><br/>
                {usernameError}
            </div>
            <div className='errorField'>
                <InputField placeholder="" displayname='Password' type='password' onChange={handlePasswordChange}/><br/>
                {passwordError}
            </div>
            <br/>
            <Button buttonType='submit' buttonText='Submit' buttonOrientation='center' onClick={handleOnSubmit} buttonSize='slrg'/><br/><br/>
            <Link className='link' to='/signup'>Click here to Sign Up</Link><br/><br/>
            
        </div>
    </>
    
}
