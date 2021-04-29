import cx from 'classnames';

import style from '../styles/page/indexPage.module.scss';

export default function indexPage() {
    return (
        <div className={style.indexPage}>
            <div className='group'>
                <div className={style.layer}>
                    <h2 className={style.part__top}>
                        PORT
                        <br />
                        FOLIO
                    </h2>
                    <span className={cx([style.part__left, style.part__date])}>
                        2017 TO 2021
                    </span>
                    <span
                        className={cx([style.part__left, style.part__subject])}
                    >
                        PUBLISHER & FRONT-END DEVELOPER
                    </span>
                    <span
                        className={cx([style.part__bottom, style.part__name])}
                    >
                        Buhee Kim
                    </span>
                    <ul className={style.part__menu}>
                        <li>01. INFO</li>
                        <li>02. CAREER</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
