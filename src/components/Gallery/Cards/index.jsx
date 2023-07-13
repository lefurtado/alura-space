import favorite from './favorito.png';
import open from './open.png';

const Cards = ({ images, styles }) => {
    return (
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
    )
}

export default Cards;