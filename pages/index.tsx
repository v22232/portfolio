import { Frame } from '@components/common';
import cx from 'classnames';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';

import style from '../styles/page/indexPage.module.scss';

export default function indexPage() {
    const [moveLink, setMoveLink] = useState(false);
    const router = useRouter();

    const _onClick = (link: string) => {
        setMoveLink(true);
        setTimeout(() => {
            router.push(link);
        }, 1200);
    };

    return (
        <Frame mode='main' moveLink={moveLink}>
            <ul className={cx([style.indexPage, moveLink && style.hide])}>
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
