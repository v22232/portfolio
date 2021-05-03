import { Frame, Substance } from '@components/common';
import { useState } from 'react';

import style from '../../styles/page/info/info.module.scss';

const menus: listType[] = [
    {
        title: 'Skills',
        content: (
            <div className={style.infoList}>
                <ul>
                    <li>
                        <span>Design</span>photoshop
                    </li>
                    <li>
                        <span>Publshing</span>css, scss, sass
                    </li>
                    <li>
                        <span>Front-end</span>javascript, jQuery, typescript,
                        React.js
                    </li>
                    <li>
                        <span>Back-end</span>node.js/express, MySql
                    </li>
                    <li>
                        <span>Etc</span>웹 접근성/표준성, 크로스 브라우징, 웹
                        반응형
                    </li>
                </ul>
            </div>
        ),
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
