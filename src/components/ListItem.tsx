import { useEffect, useState } from 'react';
import styles from './ListItem.module.scss';

interface ChildProps {
    openDetail: () => void;
    data: any;
}

const ListItem: React.FC<ChildProps> = ({ openDetail, data }) => {
    return (
        <div className={styles.item} onClick={openDetail}>
            <div className={styles.thumb}>
                <img
                    src={process.env.PUBLIC_URL + `/assets/${data.thumb}`}
                    alt={data.name}
                />
            </div>
            <div className={styles.info}>
                <h2>{data.name}</h2>
                <h3>{data.subject}</h3>
                <ul>
                    {data.tag.map((it: string, index: number) =>
                        index < 3 ? <li key={index}>#{it}</li> : '',
                    )}
                </ul>
                <p>포지션 : {data.position}</p>
                <p>개발 참여도 : {data.percent}%</p>
            </div>
        </div>
    );
};

export default ListItem;
