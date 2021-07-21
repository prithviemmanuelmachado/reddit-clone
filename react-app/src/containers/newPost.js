import NewPost from "../component/newpost";
import Title from "../component/title";
import './style.css';

export default function NewPostPage(props)
{
    return<>
        <div className='leftAlign'>
            <Title title='Create a New Post' aligndir='left'/> 
        </div>
        <NewPost/>
    </>
}
