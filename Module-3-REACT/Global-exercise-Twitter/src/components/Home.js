import '../styles/components/Home.scss';
import Tweets from './Tweets';

const Home = () => {
    return (
        <section className="home">
            <header>
                <h1 className="header__title">Inicio</h1>
            </header>
            <Tweets></Tweets>
        </section>
    );
};

export default Home;