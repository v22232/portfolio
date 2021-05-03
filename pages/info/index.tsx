import { Frame, Substance } from '@components/common';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import style from '../../styles/page/info/info.module.scss';

const menus: listType[] = [
    {
        title: 'AAAA',
        content: <div>BBBB</div>,
    },
    {
        title: 'CCCC',
        content: <div>CCCC</div>,
    },
    {
        title: 'DDDD',
        content: <div>DDDD</div>,
    },
    {
        title: 'EEEE',
        content: <div>EEEE</div>,
    },
    {
        title: 'FFFF',
        content: <div>FFFF</div>,
    },
];

export default function info() {
    const [moveHome, setMoveHome] = useState(false);

    const _onClickMoveHome = (state: boolean) => {
        setMoveHome(state);
    };

    return (
        <Frame
            mode={!moveHome ? 'sub' : 'home'}
            onClickMoveHome={_onClickMoveHome}
        >
            <Substance list={menus} />
        </Frame>
    );
}
