import styles from './Home.module.scss';
import Search from 'components/Search';

const Home = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.contents}>
                <h1 className={styles.title}>what do you want ?</h1>
                <Search />
            </div>
        </div>
    );
};

export default Home;
