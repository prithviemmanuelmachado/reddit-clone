import style from './style.module.css';
import Button from '../button';

export default function UploadButton(props)
{
    const {handleAddImages, handleFileUpload, hiddenInput, fileName, buttonText} = props;
    return<>
        <div className={style.fileUpload}>
            <input type='file' className={style.file} onChange={handleFileUpload} ref={hiddenInput}/>
            <label className={style.fileBtn}><Button buttonType='button' buttonText={buttonText} onClick={handleAddImages} buttonOrientation='left' buttonSize='smid'/> </label>
            <p className={style.filename}>{fileName}</p>
        </div>
    </>
}