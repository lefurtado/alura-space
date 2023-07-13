import Tags from '../Tags';
import styles from './Gallery.module.scss';
import images from './images.json';
import favorite from './favorito.png';
import open from './open.png';

const Gallery = () => {
    return (
        <section>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <ul className={styles.gallery__cards}>
                {images.map(image => (
                    <li key={image.id} className={styles.gallery__card}>
                        <img className={styles.gallery__image} src={image.imagem} alt={image.titulo} />
                        <p className={styles.gallery__description}>{image.titulo}</p>
                        <div>
                            <p>{image.creditos}</p>
                            <span>
                                <img src={favorite} alt='Ícone coração de curtir' />
                                <img src={open} alt='Ícone de expandir modal' />
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Gallery;