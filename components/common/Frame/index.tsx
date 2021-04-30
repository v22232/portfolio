import { PropsWithChildren, useEffect, useState } from 'react';
import cx from 'classnames';

import style from './Frame.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

type Prop = {
    mode: 'main' | 'sub' | 'home';
    moveLink?: boolean;
};

export default function Frame({
    mode,
    moveLink,
    children,
}: PropsWithChildren<Prop>) {
    const [moveHome, setMoveHome] = useState(false);

    const router = useRouter();

    const _onClickHome = () => {
        setMoveHome(true);
        setTimeout(() => {
            router.replace('/');
        }, 1200);
    };

    return (
        <div
            className={cx([
                style.Frame,
                mode === 'main' ? style.mode__main : style.mode__sub,
                moveLink && style.mode__sub,
                moveHome && style.mode__home,
                mode === 'home' && style.mode__home,
            ])}
        >
            <h2 className={style.part__top} onClick={_onClickHome}>
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
