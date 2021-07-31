import style from './style.module.css';

export default function SubredditHeader(props)
{
    const {backgroundImg, displayImg} = props
    console.log("background = "+backgroundImg);
    const bImgUrl = '/images/'+backgroundImg;
    const dImgUrl = '/images/'+displayImg;
    return<>
        <div className={style.subredditHeader}>
            <img src={bImgUrl} className={style.backgroundImg} alt="Not Found"/>
            <div className={style.displayImgContainer}>
                <img src={dImgUrl} className={style.displayImg} alt="Not Found"/>
            </div>
        </div>
    </>
}