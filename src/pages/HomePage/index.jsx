import banner from './banner.png';
import Header from "../../components/Header"
import Menu from "../../components/Menu";
import Footer from '../../components/Footer';
import styles from './HomePage.module.scss';
import Gallery from '../../components/Gallery';

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
            </main>
            <div>
                <Gallery />
            </div>
            <Footer />
        </>
    )
}

export default HomePage;