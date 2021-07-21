import { useState } from 'react';
import InputField from '../component/input';
import Title from '../component/title';
import Button from '../component/button';
import './style.css';

export default function Signup(props)
{
    const [temp1, settemp1] = useState("");
    const [temp2, settemp2] = useState("");
    const [temp3, settemp3] = useState("");
    const [temp4, settemp4] = useState("");
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
        settemp1(username);
        settemp2(password);
        settemp3(confirmPassword);
        settemp4(email);
    }
    return<>
        <div className="loginBox">
            <Title title="SIGNUP" aligndir="center"/>
            <InputField placeholder="" displayname='Username' type='text' onChange={handleUsernameChange}/><br/>
            <InputField placeholder="" displayname='Password' type='password' onChange={handlePasswordChange}/><br/>
            <InputField placeholder="" displayname='Confirm Password' type='password' onChange={handleConfirmPasswordChange}/><br/>
            <InputField placeholder="" displayname='Email' type='email' onChange={handleEmailChange}/><br/><br/>
            <Button buttonType='submit' buttonText='Submit' buttonOrientation='center' onClick={handleOnSubmit} buttonSize='slrg'/><br/><br/>
            <h1>{temp1}</h1>
            <h1>{temp2}</h1>
            <h1>{temp3}</h1>
            <h1>{temp4}</h1>
        </div>
    </>
}