import styles from './Tags.module.scss';
import images from '../Gallery/images.json';

const Tags = ({ tags, filterImages, setItens }) => {
    return (
        <div className={styles.tags}>
            <p>Filtre por tags:</p>
            <ul className={styles.tags__list}>
                {tags.map(tag => (
                    <li onClick={() => filterImages(tag)} key={tag}>{tag}</li>
                ))}
                <li onClick={() => setItens(images)}>Todas</li>
            </ul>
        </div>
    )
}

export default Tags;