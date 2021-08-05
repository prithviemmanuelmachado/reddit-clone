import style from './style.module.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputField from '../input';
import Button from '../button';

export default function NewComment(props)
{
    const History = useHistory();
    const {postId, existingComments, setExistingComment} = props;
    const [comment, setComment] = useState("");
    function handleCommentChange(event)
    {
        setComment(event.target.value);
    }
    async function submitComment(event)
    {
        if(comment!=="")
        {
            const data = {comment : comment, commentedOn : postId}
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            };
            
            await fetch('/comments', requestOptions).then((res) => {
                return res.json();
            }).then((data) => {
                if(data.isLoggedIn===false)
                    History.push('/login');
                else
                {
                    setComment("");
                    const temp = [...existingComments];
                    temp.push(data);
                    setExistingComment(temp);
                }
            }).catch(err => console.log(err));
        }
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