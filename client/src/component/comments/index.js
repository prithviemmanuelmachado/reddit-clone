import style from './style.module.css';
import NewComment from '../newComment';
import { useEffect, useState } from 'react';

async function getCommets(id, setComments)
{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id : id})
    };
    await fetch('/comments/get', requestOptions).then((res)=>{
        return res.json();
    }).then((data)=>{
        setComments(data);
    });
}

export default function Comment(props)
{
    const { createdBy, createdOn, text, commentId} = props;

    const createdOnArray = createdOn ? createdOn.split("T"):"";
    const time = createdOnArray[1] ? createdOnArray[1].split("."):"";
    const createdOnMod = createdOnArray[0]+" | "+time[0];

    const defaultComment ={
        createdBy:"",
        createdOn:"",
        subCommentText:"LOADING....."
    };
    const [comments, setComments] = useState([defaultComment]);

    useEffect(function(){
        getCommets(commentId, setComments);
    },[]);
    const commentTitle = ""+createdBy+"\t Created on : "+createdOnMod;
    return<>
        <div className={style.comment}>
            <div className={style.commentTitle}>
                {commentTitle}
            </div><br/>
            <div className={style.text}>
                {text}<br/><br/>
                <NewComment postId={commentId} existingComments={comments} setExistingComment={setComments} />
                {comments.map(function(object, index){
                    const subcreatedOnArray = object.createdOn ? object.createdOn.split("T"):"";
                    const subtime = subcreatedOnArray[1] ? subcreatedOnArray[1].split("."):"";
                    const subcreatedOnMod = createdOnArray[0]+" | "+subtime[0];
                    const subCommentTitle = ""+object.createdByUsername+"\t Created on : "+subcreatedOnMod;
                    return<>
                        
                        <div className={style.comment} key={object._id}>
                            <div className={style.commentTitle} >
                                {subCommentTitle}
                            </div><br/>
                            <div className={style.text}>
                                {object.text}<br/>
                            </div>
                            
                        </div>
                    </>
                })
                }
            </div>
                
        </div>
    </>   
        
}