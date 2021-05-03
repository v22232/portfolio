import { Frame } from '@components/common';
import cx from 'classnames';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useLayoutEffect, useState } from 'react';

import style from '../styles/page/indexPage.module.scss';

const canUseDOM: boolean = !!(
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'
);

const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

function useWindowSize() {
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useIsomorphicLayoutEffect(() => {
        function updateWidthSize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateWidthSize);
        updateWidthSize();
        return () => window.removeEventListener('resize', updateWidthSize);
    }, []);

    return windowWidth;
}

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
                    <button onClick={() => _onClick('/career')}>
                        02. CAREER
                    </button>
                </li>
            </ul>
        </Frame>
    );
}
