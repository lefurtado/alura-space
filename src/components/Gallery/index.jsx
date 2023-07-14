import Tags from '../Tags';
import styles from './Gallery.module.scss';
import images from './images.json';
import Cards from './Cards';
import { useState } from 'react';

const Gallery = () => {
    const [itens, setItens] = useState(images);
    const tags = [...new Set(images.map(valor => valor.tag))]

    const filterImages = (tag) => {
        const newImages = images.filter(image => {
            return image.tag === tag;
            
    })
        setItens(newImages);
    }

    return (
        <section className={styles.gallery}>
            <h2>Navegue pela galeria</h2>
            <Tags 
                tags={tags}
                filterImages={filterImages}
                setItens={setItens}
            />
            <Cards 
                images={itens}
                styles={styles}
            />
        </section>
    )
}

export default Gallery;