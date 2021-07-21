import { useState } from 'react';
import InputField from '../component/input';
import Title from '../component/title';
import Button from '../component/button';
import './style.css';

export default function Signup(props)
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
        console.log(username);
        console.log(password);
        console.log(confirmPassword);
        console.log(email);
    }
    return<>
        <div className="loginBox">
            <Title title="SIGNUP" aligndir="center"/>
            <InputField placeholder="" displayname='Username' type='text' onChange={handleUsernameChange}/><br/>
            <InputField placeholder="" displayname='Password' type='password' onChange={handlePasswordChange}/><br/>
            <InputField placeholder="" displayname='Confirm Password' type='password' onChange={handleConfirmPasswordChange}/><br/>
            <InputField placeholder="" displayname='Email' type='email' onChange={handleEmailChange}/><br/><br/>
            <Button buttonType='submit' buttonText='Submit' buttonOrientation='center' onClick={handleOnSubmit} buttonSize='slrg'/><br/><br/>
        </div>
    </>
}