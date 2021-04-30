import { Frame, Substance } from '@components/common';
import Link from 'next/link';

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
    return (
        <Frame mode='sub'>
            <Substance list={menus} />
        </Frame>
    );
}
