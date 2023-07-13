import styles from './Footer.module.scss';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';

const Footer = () => {
    return (
        <footer>
            <div className={styles.icons}>
                <a href="/">
                    <img src={facebook} alt="Logo do facebook" />
                </a>
                <a href="/">
                    <img src={twitter} alt="Logo do twitter" />
                </a>
                <a href="/">
                    <img src={instagram} alt="Logo do instagram" />
                </a>
            </div>
            <p>Desenvolvido por Leandro Furtado</p>
        </footer>
    )
}

export default Footer;