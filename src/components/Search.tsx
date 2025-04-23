import 'swiper/css';
import styles from './Search.module.scss';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [Value, setValue] = useState('');
    const [words, setWords] = useState([
        'Javascript',
        'Typescript',
        'Next.js',
        'Vue',
        'PHP',
    ]);

    const route = useNavigate();

    const stored = sessionStorage.getItem('words');
    const storedWords: string[] = stored ? JSON.parse(stored) : [];

    useEffect(() => {
        if (stored) {
            setWords(storedWords);
        }
    }, []);
    const fncSearch = () => {
        setWords([Value, ...words]);
        if (words.length > 6) {
            setWords((deleteItem) => deleteItem.slice(0, -1));
        }
        sessionStorage.setItem('words', JSON.stringify([Value, ...words]));

        route(`/list/${Value}`);
    };

    const gotoList = (it: string) => {
        route(`/list/${it}`);
    };

    const FncEnter = (e: any) => {
        setValue(e.target.value);
        if (e.keyCode === 13) {
            fncSearch();
        }
    };
    return (
        <div className={styles.wrap}>
            <div className={styles.textbox}>
                <input
                    type="text"
                    onKeyUp={(event) => {
                        FncEnter(event);
                    }}
                />
                <button type="submit" onClick={fncSearch}>
                    <img
                        src={process.env.PUBLIC_URL + `/assets/i_search.svg`}
                    />
                </button>
            </div>
            <Swiper
                spaceBetween={3}
                slidesPerView="auto"
                className={styles.search_list}
            >
                {words.map((it, idx) => {
                    return (
                        <SwiperSlide
                            key={idx}
                            className={styles.li}
                            onClick={() => {
                                gotoList(it);
                            }}
                        >
                            {it}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Search;
