import styles from './Menu.module.scss';
import icons from './icons.json';

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
                {icons.map(icon => (
                    <li key={icon.id} className={styles.menu__item}>
                        <img src={icon.path} alt={icon.alt} />
                        <a href="/">{icon.link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu;