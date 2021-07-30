import style from './style.module.css';

export default function SubredditHeader(props)
{
    const {backgroundImg, displayImg} = props
    return<>
        <div className={style.subredditHeader}>
            <img src={backgroundImg} className={style.backgroundImg} alt="Not Found"/>
            <div className={style.displayImgContainer}>
                <img src={displayImg} className={style.displayImg} alt="Not Found"/>
            </div>
        </div>
    </>
}