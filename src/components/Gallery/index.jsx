import Tags from '../Tags';
import styles from './Gallery.module.scss';
import images from './images.json';
import Cards from './Cards';

const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <Cards 
                images={images}
                styles={styles}
            />
        </section>
    )
}

export default Gallery;