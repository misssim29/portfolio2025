import { useNavigate } from 'react-router-dom';
import styles from './empty.module.scss';

const Empty = () => {
    const list = [
        'Javascript',
        'Next.js',
        'React',
        'React Native',
        'php',
        'Vue',
        'jquery',
        'css',
        'typescript',
        'GPT',
    ];

    const route = useNavigate();

    const goList = (it: string) => {
        route(`/list/${it}`);
    };

    return (
        <div className={styles.wrap}>
            <h3>해당 검색어가 없습니다.</h3>
            <div className={styles.box}>
                <h4>추천검색어</h4>
                <ul>
                    {list.map((it, idx) => (
                        <li
                            key={idx}
                            onClick={() => {
                                goList(it);
                            }}
                        >
                            {idx + 1}. {it}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Empty;
