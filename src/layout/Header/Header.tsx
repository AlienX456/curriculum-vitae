import classes from './Header.module.css'
import { Icon } from '@iconify/react';

export default function Header() {
    return (
    <div className={classes.container}>
        <div className={classes.sectionOne}>
            <Icon className={classes.hamburger} icon="charm:menu-hamburger" />
            <p>This is Esteban Romero <Icon icon="fxemoji:rocket" /> </p>
        </div>
        <div className={classes.sectionTwo}>
            <Icon className={classes.sectionTwoIcon} icon="entypo-social:linkedin-with-circle" />
            <Icon className={classes.sectionTwoIcon} icon="carbon:translate" />
            <Icon className={classes.sectionTwoIcon} icon="ic:baseline-mode-night" />
        </div>
    </div>
    )
}