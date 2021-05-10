import cx from 'classnames';
import { useEffect, useState } from 'react';
import style from './Substance.module.scss';

type Prop = {
    list: listType[];
    heightAuto?: boolean;
};

export default function Substance({ list, heightAuto }: Prop) {
    const [lender, setLender] = useState(true);

    const renderListItem = (list: listType, idx: number) => (
        <div
            className={cx([style.layer, heightAuto && style.heightAuto])}
            key={idx}
        >
            <div className={style.number}>
                <span>0{idx + 1}</span>
            </div>
            <div className={style.title}>
                {list.title}
                {list.subtitle && <div>{list.subtitle}</div>}
            </div>
            <div className={style.content}>
                {/* {!lender && (
                    <ul className={style.lender__list}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                )} */}
                {lender && list.content}
            </div>
        </div>
    );

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLender(true);
    //     }, 1200);
    // }, []);

    return <div className={style.Substance}>{list.map(renderListItem)}</div>;
}

Substance.defaultProps = {
    heightAuto: false,
};
