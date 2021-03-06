import style from './style.module.css';

const align = {
    left:style.leftAlign,
    right:style.rightAlign,
    center:style.centerAlign,

}

export default function Title(props)
{
    const {title, aligndir, time, by} = props;
    const aligntext = aligndir ? align[aligndir] : "";
    const createdOn = time ? time : "";
    const createdBy = by ? by : "";

    return<>
        <h1 className={aligntext}>{title}<p className={style.time}>{createdBy}</p><p className={style.time}>{createdOn}</p></h1>
    </>
        
}