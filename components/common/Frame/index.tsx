import { PropsWithChildren } from 'react';
import cx from 'classnames';

import style from './Frame.module.scss';

type Prop = {
    mode: 'main' | 'sub';
    moveLink?: boolean;
};

export default function Frame({
    mode,
    moveLink,
    children,
}: PropsWithChildren<Prop>) {
    return (
        <div
            className={cx([
                style.Frame,
                mode === 'main' ? style.mode__main : style.mode__sub,
                moveLink && style.mode__sub,
            ])}
        >
            <h2 className={style.part__top}>
                PORT
                <br />
                FOLIO
            </h2>
            <span className={cx([style.part__left, style.part__date])}>
                2017 TO 2021
            </span>
            <span className={cx([style.part__left, style.part__subject])}>
                PUBLISHER
                <br /> & <br />
                FRONT-END DEVELOPER
            </span>
            <span className={cx([style.part__bottom, style.part__name])}>
                Buhee Kim
            </span>
            {children}
        </div>
    );
}

Frame.defaultProps = {
    mode: 'sub',
    moveLink: false,
};
