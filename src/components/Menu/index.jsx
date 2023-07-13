import styles from './Menu.module.scss';
import home from '../../assets/icons/home-ativo.png';
import eye from '../../assets/icons/mais-vistas-inativo.png';
import like from '../../assets/icons/mais-curtidas-inativo.png';
import news from '../../assets/icons/novas-inativo.png';
import surprise from '../../assets/icons/surpreenda-me-inativo.png';

const icons = [
    {
        path: home,
        alt: "Ícone de uma casa",
        link: "Inicío",
        id: 1
    },
    {
        path: eye,
        alt: "ícone de um olho",
        link: "Mais vistas",
        id: 2
    },
    {
        path: like,
        alt: "ícone de uma mão com o polegar opositor levantado",
        link: "Mais curtidas",
        id: 3
    },
    {
        path: news,
        alt: "icone de uma estrelinha brilhante",
        link: "Novas",
        id: 4
    },
    {
        path: surprise,
        alt: "ícone de uma lâmpada",
        link: "Surpreenda-me",
        id: 5
    }
]

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