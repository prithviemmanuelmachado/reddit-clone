import style from './style.module.css';
import Button from '../button';

export default function CreateNewPostMini(props)
{
    const {exstyles} = props;
    const classes = style.newPostMini+" "+style[exstyles];
    return<>
        <div className={classes}>
            <div className={style.text}>
                Enter Text.........
            </div><br/>
            <Button buttonType='button' buttonText='Create New Post' buttonOrientation='right' buttonSize='smid'/>
        </div>
    </>
}