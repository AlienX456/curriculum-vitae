import style from './ImageTextComposition.module.scss'

export default function ImageTextComposition(props: any) {
    return(
        <div className={style.container}>        
            <img src={props.imageSRC} alt='' className={style.image}/>
            <div className={style.textContainer}>
                <p className={style.title}>{props.title}</p>
                <p className={style.description}>{props.text}</p>
            </div>
        </div>
    );
}