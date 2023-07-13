import Icon from './Icon';
import styles from './Menu.module.scss';
import icons from './icons.json';

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
                {icons.map(icon => (
                    <Icon 
                        key={icon.id}
                        icons={icon}
                        styles={styles}
                    />
                ))}
            </ul>
        </nav>
    )
}

export default Menu;