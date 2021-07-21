import style from './style.module.css';
import { useRef, useState } from 'react';
import InputField from '../input';
import Button from '../button';
import InputBox from '../inputbox';

export default function NewPost(props)
{
    const hiddenInput = useRef(null);
    const [fileName, setFileNames] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    function handleOnSubmit(event)
    {
        console.log(event.target.value);
    }
    function handleFileUpload(event)
    {
        const filename = event.target.files[0].name ? event.target.files[0].name : "None selected";
        setFileNames("Selected Image : "+filename);
    } 
    function handleAddImages(event)
    {
        hiddenInput.current.click();
    }
    function handleTitleChange(event)
    {
        setTitle(event.target.value);
        console.log(title);
    }
    function handleBodyChange(event)
    {
        setBody(event.target.value);
        console.log(body);
    }
    return<>
        <div className={style.newPost}>
            <InputField placeholder='' displayname='Title' type='textbox' onChange={handleTitleChange}/><br/>
            <InputBox onChange={handleBodyChange} placeholder='Enter text' rows='7' cols=''/><br/><br/>
            <div className={style.fileUpload}>
                <input type='file' className={style.file} onChange={handleFileUpload} ref={hiddenInput}/>
                <label className={style.fileBtn}><Button buttonType='button' buttonText='Upload images' onClick={handleAddImages} buttonOrientation='left' buttonSize='smid'/> </label>
                <p className={style.filename}>{fileName}</p>
            </div>
            <Button buttonType='submit' buttonText='Submit' buttonOrientation='right' onClick={handleOnSubmit} buttonSize='smid'/>
        </div>
    </>
}