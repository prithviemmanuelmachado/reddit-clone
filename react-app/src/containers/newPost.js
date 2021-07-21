import NewPost from "../component/newpost";
import Title from "../component/title";
import Select from "../component/select";
import './style.css';

export default function NewPostPage(props)
{
    const options=['Test', 'test1', 'test2'];
    return<>
        <div className='flex'>
            <div className='leftAlign flexLeft'>
                <Title title='Create a New Post' aligndir='left'/> 
            </div>
            <Select options={options} optionsFor='Choose a Subreddit (Ignore if none)' className='flexRight'/>
        </div>
        <NewPost/>
    </>
}
