import InputField from '../component/input';
import Title from '../component/title';
import { useHistory } from 'react-router-dom';
import Button from '../component/button';
import UploadButton from '../component/uploadButton';
import { hostname } from './globals';
import { useState, useRef } from 'react';
import './style.css';

export default function NewSubreddit(props)
{
    function handleOnSubmit(event)
    {

    }
    const [title, setTitle] = useState("");
    function handleTitleChange(event)
    {
        setTitle(event.target.value);
    }
    const hiddenDisplayInput = useRef(null);
    const [fileDisplayImageName, setFileDisplayImageNames] = useState("");
    const [fileDisplayImage, setFileDisplayImage] = useState(null);
    function handleDisplayImageUpload(event)
    {
        const filename = event.target.files[0].name ? event.target.files[0].name : "None selected";
        setFileDisplayImage(event.target.files[0]);
        setFileDisplayImageNames("Selected Image : "+filename);
    } 
    function handleAddDisplayImages(event)
    {
        hiddenDisplayInput.current.click();
    }

    const hiddenBackgroundInput = useRef(null);
    const [fileBackgroundImageName, setFileBackgroundImageNames] = useState("");
    const [fileBackgroundImage, setFileBackgroundImage] = useState(null);
    function handleBackgroundImageUpload(event)
    {
        const filename = event.target.files[0].name ? event.target.files[0].name : "None selected";
        setFileBackgroundImage(event.target.files[0]);
        setFileBackgroundImageNames("Selected Image : "+filename);
    } 
    function handleAddBackgroundImages(event)
    {
        hiddenBackgroundInput.current.click();
    }

    return<>
        <div className='leftAlign'>
            <Title title="Create new subreddit" aligndir="left"/>
        </div>        
        <div className='containers'>
            <InputField placeholder="" displayname='Title' type='text' onChange={handleTitleChange}/><br/>
            <UploadButton hiddenInput={hiddenDisplayInput} handleFileUpload={handleDisplayImageUpload} handleAddImages={handleAddDisplayImages} fileName={fileDisplayImageName} buttonText='Upload Display Image'/><br/>
            <UploadButton hiddenInput={hiddenBackgroundInput} handleFileUpload={handleBackgroundImageUpload} handleAddImages={handleAddBackgroundImages} fileName={fileBackgroundImageName} buttonText='Upload Background Image'/><br/>
            <Button buttonType='submit' buttonText='Submit' buttonOrientation='right' onClick={handleOnSubmit} buttonSize='slrg'/>
        </div>
       
    </>
}