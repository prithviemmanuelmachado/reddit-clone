import style from './style.module.css';
import { useState } from 'react';
import InputField from '../input';
import Button from '../button';

export default function NewComment(props)
{
    const [comment, setComment] = useState("");
    function handleCommentChange(event)
    {
        setComment(event.target.value);
        console.log(comment);
    }
    function submitComment(event)
    {

    }
    return<>
        <div className={style.commentBox}>
            <div className={style.commentFlexLeft}>
                
                <InputField onChange={handleCommentChange} type='text' placeholder='Comment here....' displayname='' className='small'/>
            </div>
            <div className={style.commentFlexRight}>
                        
                <Button buttonType='button' buttonText='Comment' buttonOrientation='left' buttonSize='ssml' onClick={submitComment}/>
            </div>
        </div>
    </>
}