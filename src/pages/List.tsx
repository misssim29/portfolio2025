import ListItem from 'components/ListItem';
import Search from 'components/Search';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './List.module.scss';
import { useEffect, useState } from 'react';
import Detail from 'components/Detail';
import datalist from 'data/data.json';
import Empty from 'components/empty';

type Item = {
    id: number;
    keyword: string[];
};

const List = () => {
    const { id } = useParams();
    const [show, setShow] = useState(0);
    const route = useNavigate();
    const [data, setData] = useState<Item[]>([]);
    const [dataNum, setDataNum] = useState(0);

    useEffect(() => {
        if (id) {
            const filtered = datalist.filter((it) =>
                it.keyword?.includes(id.toLowerCase()),
            );
            setData(filtered);
        }
    }, [datalist, id]);

    const goHome = () => {
        route('/');
    };
    const openDetail = (num: number) => {
        setShow(1);
        setDataNum(num);
    };
    const FncClose = () => {
        setShow(2);
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.left}>
                <div className={styles.top}>
                    <button className={styles.logo} onClick={goHome}>
                        <img
                            src={process.env.PUBLIC_URL + `/assets/i_cat.svg`}
                        />
                    </button>
                    <Search />
                </div>
                <div className={styles.list}>
                    {data[0] ? (
                        data.map((it) => {
                            return (
                                <ListItem
                                    key={it.id}
                                    openDetail={() => {
                                        openDetail(it.id);
                                    }}
                                    data={it}
                                />
                            );
                        })
                    ) : (
                        <Empty />
                    )}
                </div>
            </div>
            <div
                className={`${styles.right} ${show === 1 ? styles.on : show === 2 ? styles.off : ''}`}
            >
                <Detail FncClose={FncClose} num={dataNum} />
            </div>
        </div>
    );
};

export default List;
