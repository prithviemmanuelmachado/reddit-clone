import style from './style.module.css';

const align = {
    left:style.leftAlign,
    right:style.rightAlign,
    center:style.centerAlign
};

const size = {
    smid:style.smid,
    slrg:style.slrg,
    ssml:style.ssml
};

export default function Button(props)
{
    const {buttonType, buttonText, buttonOrientation, onClick, buttonSize} = props;
    const orientation = buttonOrientation ? align[buttonOrientation] : "";
    const btnsize = buttonSize ? size[buttonSize] : "";
    const cssClasses = style.buttons+" "+btnsize;
    return<>
        <div className={orientation}>
            <button type={buttonType} className={cssClasses} onClick={onClick}>{buttonText}</button>
        </div>
        
    </>
}