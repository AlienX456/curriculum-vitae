import classes from './IconsRow.module.scss'
import { Icon } from '@iconify/react';

export function IconsRow(props:any) {

    const iconsDivs = props.iconsArray.map((icon :any) => 
        <div className={classes.iconColumn}>
            <Icon icon={icon.iconName} className={classes.icon}/>
            <p>{icon.iconTitle}</p>
        </div>
    );


    return (
        <div className={classes.container}>
            {iconsDivs}
        </div>
    )
}