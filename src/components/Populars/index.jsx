import Button from 'components/Button';
import popularsImages from './images-populars.json';
import styles from './Populars.module.scss';

const Populars = () => {
    return (
        <aside className={styles.populars}>
            <h2>Populares</h2>
            <ul className={styles.populars__images}>
                {popularsImages.map(popImage => (
                    <li key={popImage.id}>
                        <img src={popImage.path} alt={popImage.alt} />
                    </li>
                ))}
            </ul>
            <Button>Ver mais fotos</Button>
        </aside>
    )
}

export default Populars;