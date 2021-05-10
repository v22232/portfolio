import { Frame } from '@components/common';
import useWindowSize from '@utils/windowSize';
import cx from 'classnames';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useLayoutEffect, useState } from 'react';

import style from '../styles/page/indexPage.module.scss';

const canUseDOM: boolean = !!(
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'
);

export default function indexPage() {
    const [moveSub, setMoveSub] = useState(false);
    const [moveHome, setMoveHome] = useState(false);

    const router = useRouter();
    const width = useWindowSize();

    const _onClick = (link: string) => {
        if (width > 1000) {
            setMoveSub(true);
            setTimeout(() => {
                router.push(link);
            }, 1200);
        } else {
            router.push(link);
        }
    };

    useEffect(() => {
        router.query.home && setMoveHome(true);
    }, [router.query.home]);

    return (
        <Frame mode={moveSub ? 'sub' : moveHome ? 'home' : 'main'}>
            <ul
                className={cx([
                    style.indexPage,
                    moveHome && style.mode__home,
                    moveSub && style.hide,
                ])}
            >
                <li>
                    <button onClick={() => _onClick('/info')}>01. INFO</button>
                </li>
                <li>
                    <button onClick={() => _onClick('/project')}>
                        02. PROJECT
                    </button>
                </li>
            </ul>
        </Frame>
    );
}
