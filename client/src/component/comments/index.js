import style from './style.module.css';
import Upvote from '../upvote';
import Downvote from '../downvote';
import NewComment from '../newComment';

export default function Comment(props)
{
    const { createdBy, createdOn, text, commentId } = props;
    const test=[{createdBy:'testuser4', createdOn:'6/7/2022 20:22', subCommentText:'testing 1234'}, {createdBy:'testuser4', createdOn:'6/7/2022 20:22', subCommentText:'testing 1234'}, {createdBy:'testuser4', createdOn:'6/7/2022 20:22', subCommentText:'testing 1234'}];
    const commentTitle = ""+createdBy+"\t Created on : "+createdOn;
    function submitComment(commentId)
    {
        return function(){
            //add subcomment based on commentId here
        }
    }
    return<>
        <div className={style.comment}>
            <div className={style.commentTitle}>
                {commentTitle}
            </div><br/>
            <div className={style.text}>
                {text}<br/><br/>
                <Upvote count='26'/>
                <Downvote count='18' />
                <NewComment submitComment={submitComment} commentId={commentId}/>
                {test.map(function(object, index){
                    const subCommentTitle = ""+object.createdBy+"\t Created on : "+object.createdOn;
                    return<>
                        
                        <div className={style.comment} key={index}>
                            <div className={style.commentTitle} >
                                {subCommentTitle}
                            </div><br/>
                            <div className={style.text}>
                                {object.subCommentText}<br/>
                                <Upvote count='26'/>
                                <Downvote count='18'/>
                            </div>
                            
                        </div>
                    </>
                })
                }
            </div>
                
        </div>
    </>   
        
}