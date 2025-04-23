import { useEffect, useRef, useState } from 'react';
import styles from './Detail.module.scss';
import datalist from 'data/data.json';

interface ChildProps {
    FncClose: () => void;
    num: number;
}

interface DataType {
    id: number;
    name: string;
    keyword: string[];
    subject: string;
    tag: string[];
    position: string;
    percent: number;
    people: string;
    workInfo: string;
    date: string;
    site: string;
    thumb: string;
    videoPc?: string;
    videoMobile?: string;
    videoMobile2?: string;
}

const Detail: React.FC<ChildProps> = ({ FncClose, num }) => {
    const [data, setData] = useState<DataType>({
        id: 0,
        name: '',
        keyword: [],
        subject: '',
        tag: [],
        position: '',
        percent: 0,
        people: '',
        workInfo: '',
        date: '',
        site: '',
        thumb: '',
        videoPc: '',
        videoMobile: '',
    });

    const RefDetail = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (num) {
            const filtered = datalist.filter((it) => it.id === num);
            setData(filtered[0]);
            if (RefDetail.current) {
                RefDetail.current.scrollTop = 0;
            }
        }
    }, [num]);
    return (
        <div className={styles.wrap} ref={RefDetail}>
            <div className={styles.thumb}>
                <img
                    src={process.env.PUBLIC_URL + `/assets/${data.thumb}`}
                    alt={data.name}
                />
            </div>
            <div className={styles.info}>
                <h2>{data.name}</h2>
                <h3>{data.subject}</h3>
                <p>사용 기술 : {data.tag.join(', ')}</p>
                <p>포지션 : {data.position}</p>
                <p>개발 참여도 : {data.percent}%</p>
                <p>참여 인원 : {data.people}</p>
                <p>업무내용 : {data.workInfo}</p>
                <p>업무기간 : {data.date}</p>
                {data.name === '속닥' ? (
                    <a
                        href={
                            process.env.PUBLIC_URL +
                            `/assets/application-725d3761-fdf8-4e32-9bc9-f231c5d380ea-1.apk`
                        }
                        className={styles.btn_site}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={process.env.PUBLIC_URL + `/assets/i_arrow.svg`}
                            alt="바로가기"
                        />
                        앱 다운로드하기
                    </a>
                ) : (
                    <a
                        href={data.site}
                        className={styles.btn_site}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={process.env.PUBLIC_URL + `/assets/i_arrow.svg`}
                            alt="바로가기"
                        />
                        사이트 바로가기
                    </a>
                )}

                <div className={styles.videos}>
                    {data.videoPc ? (
                        <>
                            <h4>&lt; pc &gt;</h4>
                            <video
                                src={
                                    process.env.PUBLIC_URL +
                                    `/assets/${data.videoPc}`
                                }
                                autoPlay
                                muted
                                loop
                                className={styles.pc}
                            ></video>
                        </>
                    ) : (
                        ''
                    )}
                    {data.videoMobile ? (
                        <>
                            <h4>&lt; mobile &gt;</h4>
                            <video
                                src={
                                    process.env.PUBLIC_URL +
                                    `/assets/${data.videoMobile}`
                                }
                                autoPlay
                                muted
                                loop
                                className={styles.mobile}
                            ></video>
                            {data.videoMobile2 ? (
                                <video
                                    src={
                                        process.env.PUBLIC_URL +
                                        `/assets/${data.videoMobile2}`
                                    }
                                    autoPlay
                                    muted
                                    loop
                                    className={styles.mobile2}
                                ></video>
                            ) : (
                                ''
                            )}
                        </>
                    ) : (
                        ''
                    )}
                </div>
                <button onClick={FncClose} className={styles.btn_close}>
                    <img
                        src={process.env.PUBLIC_URL + `/assets/i_return.svg`}
                    />
                </button>
            </div>
        </div>
    );
};

export default Detail;
