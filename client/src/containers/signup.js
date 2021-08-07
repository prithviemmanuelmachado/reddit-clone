import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputField from '../component/input';
import Title from '../component/title';
import Button from '../component/button';
import './style.css';

export default function Signup(props)
{
    const History = useHistory();
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
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
    const [confirmPassword, setConfirmPassword] = useState("");
    function handleConfirmPasswordChange(event)
    {
        setConfirmPassword(event.target.value);
    }
    const [email, setEmail] = useState("");
    function handleEmailChange(event)
    {
        setEmail(event.target.value);
    }
    function handleOnSubmit(event)
    {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(username!=="" && password!=="" && email!=="" && confirmPassword!=="")
        {
            if(confirmPassword === password)
            {
                const isMailValid = mailformat.test(email);
                const isPassValid = passwordformat.test(password);
                if(isMailValid === false || isPassValid === false)
                {
                    if(isMailValid === false)
                        setEmailError(<p className="error">Invalid Email</p>);
                    if(isPassValid === false)
                        setPasswordError(<p className="error">Password must be between 8 to 15 characters and must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character</p>);
                }
                else
                {
                    setPasswordError("");
                    setEmailError("");
                    setUsernameError("");
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username:username, password:password, email:email })
                    };
                    fetch('/createNewUser', requestOptions)
                    .then(res => {
                        return res.json()
                    }).then(data => {
                        if(data.errorEmail)
                            setEmailError(<p className="error">{data.errorEmail}</p>);
                        if(data.errorUsername)
                            setUsernameError(<p className="error">{data.errorUsername}</p>);
                        if(data._id)
                            History.push('/');                        
                    })
                    .catch(err => console.log(err));
                }

            }
            else
            {
                if(password!=="" && confirmPassword!=="")
                    setPasswordError(<p className="error">Passwords do not match</p>);
            } 
        }       
        else
        {
            if(username==="")
                setUsernameError(<p className="error">Enter Username</p>);
            if(password==="" || confirmPassword==="")
                setPasswordError(<p className="error">Enter Passwords</p>);
            if(email==="")
                setEmailError(<p className="error">Enter Email</p>);
            
        }
    }
    return<>
        <div className="loginBox">
            <Title title="SIGNUP" aligndir="center"/>
            <div className='errorField'>
                <InputField placeholder="" displayname='Username' type='text' onChange={handleUsernameChange}/><br/>
                {usernameError}
            </div>
            <div className='errorField'>
                <InputField placeholder="" displayname='Password' type='password' onChange={handlePasswordChange}/><br/>
                <InputField placeholder="" displayname='Confirm Password' type='password' onChange={handleConfirmPasswordChange}/><br/>
                {passwordError}
            </div>
            <div className='errorField'>
                <InputField placeholder="" displayname='Email' type='email' onChange={handleEmailChange}/><br/><br/>
                {emailError}
            </div>
            <Button buttonType='submit' buttonText='Submit' buttonOrientation='center' onClick={handleOnSubmit} buttonSize='slrg'/><br/><br/>
        </div>
    </>
}