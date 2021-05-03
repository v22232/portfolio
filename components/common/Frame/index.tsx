import { PropsWithChildren, useEffect, useState } from 'react';
import cx from 'classnames';

import style from './Frame.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import useWindowSize from '@utils/windowSize';

type Prop = {
    mode: 'main' | 'sub' | 'home';
    onClickMoveHome?: (state: boolean) => void;
};

export default function Frame({
    mode,
    onClickMoveHome,
    children,
}: PropsWithChildren<Prop>) {
    const [moveSub, setMoveSub] = useState(false);

    const width = useWindowSize();

    const router = useRouter();

    const _onClickHome = () => {
        onClickMoveHome && onClickMoveHome(true);

        if (router.pathname === '/') {
            return;
        }

        if (width > 1000) {
            setMoveSub(true);
            setTimeout(() => {
                router.push('/?home=true', '/');
            }, 1200);
        } else {
            router.push('/?home=true', '/');
        }
    };

    return (
        <div
            className={cx([
                style.Frame,
                mode === 'main'
                    ? style.mode__main
                    : mode === 'home'
                    ? style.mode__home
                    : style.mode__sub,
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
            <div
                className={cx([
                    style.part__contents,
                    moveSub && style.hide,
                    (mode === 'main' || mode === 'home') && style.center,
                ])}
            >
                {children}
            </div>
        </div>
    );
}

Frame.defaultProps = {
    mode: 'sub',
    moveLink: false,
    moveHome: false,
};
