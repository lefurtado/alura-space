import Header from "components/Header";
import Menu from "components/Menu";
import Footer from 'components/Footer';
import Gallery from 'components/Gallery';
import Populars from 'components/Populars';
import banner from './banner.png';
import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <section className={styles.main}>
                    <Menu />
                    <div className={styles.main__image}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="Imagem da terra vista do espaço" />
                    </div>
                </section>
                <div className={styles.main__gallery}>
                    <Gallery />
                    <Populars />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default HomePage;