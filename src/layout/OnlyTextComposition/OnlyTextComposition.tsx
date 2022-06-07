import classes from './OnlyTextComposition.module.scss'
import { Icon } from '@iconify/react';

export default function OnlyTextComposition(props: any) {
    return (
        <div className={classes.container}>
            {props.title && <p className={classes.title}>{props.title} <Icon icon={props.iconTitle} color={props.iconColor}/></p>}
            {props.text && <p className={classes.text}>{props.text}</p>}
        </div>
    );
}