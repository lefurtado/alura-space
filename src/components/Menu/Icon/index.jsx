const Icon = ({ icons, styles }) => {
    return (
        <li className={styles.menu__item}>
            <img src={icons.path} alt={icons.alt} />
            <a href="/">{icons.link}</a>
        </li>
    )
}

export default Icon;