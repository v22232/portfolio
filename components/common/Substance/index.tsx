import { Fragment, useEffect } from 'react';
import style from './Substance.module.scss';

type Prop = {
    list: listType[];
};

export default function Substance({ list }: Prop) {
    const renderListItem = (list: listType, idx: number) => (
        <div className={style.layer} key={idx}>
            <div className={style.number}>
                <span>0{idx + 1}</span>
            </div>
            <div className={style.title}>{list.title}</div>
            <div className={style.content}>{list.content}</div>
        </div>
    );

    return <div className={style.Substance}>{list.map(renderListItem)}</div>;
}
