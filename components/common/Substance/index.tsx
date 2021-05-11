import cx from 'classnames';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import Frame from '../Frame';
import style from './Substance.module.scss';

type Prop = {
    list: listType[];
    lendering?: boolean;
    heightAuto?: boolean;
    numberling?: boolean;
};

export default function Substance({
    list,
    lendering,
    heightAuto,
    numberling,
}: Prop) {
    const [lender, setLender] = useState(false);

    const renderListItem = (list: listType, idx: number) => (
        <div
            className={cx([style.layer, heightAuto && style.heightAuto])}
            key={idx}
        >
            <div className={style.number}>
                {numberling && <span>0{idx + 1}</span>}
                {!numberling && idx === 0 && <span>01</span>}
            </div>
            <div className={style.title}>
                {!lender && (
                    <>
                        <p className={style.lender__text}></p>
                        <p className={style.lender__text}></p>
                        <p className={style.lender__text}></p>
                    </>
                )}
                {lender && (
                    <>
                        {list.title}
                        {list.subtitle && <div>{list.subtitle}</div>}
                    </>
                )}
            </div>
            <div className={style.content}>
                {!lender && (
                    <ul className={style.lender__list}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                )}
                {lender && list.content}
            </div>
        </div>
    );

    useEffect(() => {
        if (lendering) {
            setTimeout(() => {
                setLender(true);
            }, 2000);
        } else {
            setLender(true);
        }
    }, []);

    return <div className={style.Substance}>{list.map(renderListItem)}</div>;
}

Substance.defaultProps = {
    heightAuto: false,
    numberling: true,
    lendering: false,
};
