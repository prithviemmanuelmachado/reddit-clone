import style from './style.module.css';
import { useRef, useState } from 'react';
import InputField from '../input';
import Button from '../button';
import InputBox from '../inputbox';
import UploadButton from '../uploadButton';
import { hostname } from '../../containers/globals';

export default function NewPost(props)
{
    const {getSubreddit} = props;
    const hiddenInput = useRef(null);
    const [fileName, setFileNames] = useState("");
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    function handleOnSubmit(event)
    {
        if(title || body)
        {
            const subreddit = getSubreddit();
            const data = new FormData();
            data.append('title',title);
            data.append('text', body);
            data.append('subreddit', subreddit);
            if(file)
                data.append('image', file);
            const requestOptions = {
                method: 'POST',
                body: data
            };
            
            const endpoint=hostname+'/createNewPost';
            fetch(endpoint, requestOptions)
            .then(res => {
                return res.json()
            }).then(data => {
                console.log(data._id);
                if(data.error)
                    console.log(data.error);
                else
                    History.push('/');                        
            })
            .catch(err => console.log(err));
        }
    }
    function handleFileUpload(event)
    {
        const filename = event.target.files[0].name ? event.target.files[0].name : "None selected";
        setFile(event.target.files[0]);
        setFileNames("Selected Image : "+filename);
    } 
    function handleAddImages(event)
    {
        hiddenInput.current.click();
    }
    function handleTitleChange(event)
    {
        setTitle(event.target.value);
    }
    function handleBodyChange(event)
    {
        setBody(event.target.value);
    }
    return<>
        <div className={style.newPost}>
            <InputField placeholder='' displayname='Title' type='textbox' onChange={handleTitleChange}/><br/>
            <InputBox onChange={handleBodyChange} placeholder='Enter text' rows='7' cols=''/><br/><br/>
            <UploadButton hiddenInput={hiddenInput} handleFileUpload={handleFileUpload} handleAddImages={handleAddImages} fileName={fileName} buttonText='Upload Image'/><br/><br/>
            <Button buttonType='submit' buttonText='Submit' buttonOrientation='right' onClick={handleOnSubmit} buttonSize='smid'/>
        </div>
    </>
}