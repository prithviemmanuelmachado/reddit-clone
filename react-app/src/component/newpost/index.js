import style from './style.module.css';
import { useRef, useState } from 'react';
import Button from '../button';

export default function NewPost(props)
{
    const hiddenInput = useRef(null);
    const [fileName, setFileNames] = useState("");
    function handleOnSubmit(event)
    {
        console.log(event.target.value);
    }
    function handleFileUpload(event)
    {
        setFileNames(event.target.files[0].name)
    } 
    function handleAddImages(event)
    {
        hiddenInput.current.click();
    }
    return<>
        <div className={style.newPost}>
        <div className={style.fileUpload}>
            <input type='file' className={style.file} onChange={handleFileUpload} ref={hiddenInput}/>
            <label><Button buttonType='button' buttonText='Upload images' onClick={handleAddImages} buttonOrientation='left' buttonSize='smid'/> </label>
        </div>
        <Button buttonType='submit' buttonText='Submit' buttonOrientation='right' onClick={handleOnSubmit} buttonSize='smid'/>
        </div>
    </>
}