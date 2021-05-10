import { Frame, Substance } from '@components/common';
import { useState } from 'react';

import style from '../../styles/page/info/info.module.scss';

const menus: listType[] = [
    {
        title: 'Info',
        content: (
            <div className={style.infoList}>
                <ul>
                    <li>
                        <span>이름</span>김부희
                    </li>
                    <li>
                        견고한 UI, 기억에 남는 UX, 간결하고 깔끔한 코딩, 협업의
                        대가
                    </li>
                </ul>
            </div>
        ),
    },
    {
        title: 'Career',
        subtitle: <p>5년차 퍼블리셔</p>,
        content: (
            <div className={style.infoList}>
                <ul>
                    <li>
                        <span>웨일소프트</span>퍼블리싱, 프론트앤드
                        <br />
                        <span>주요사업</span>공공기관(대규모 웹 사이트)
                        <br />
                        <span>재직날짜</span>2017. 06 ~ 2020. 12
                        <br />
                        <br />
                    </li>
                    <li>
                        <span>손스소프트</span>퍼블리싱, 프론트앤드, 백앤드
                        <br />
                        <span>주요사업</span>교육 사이트, CMS, LMS
                        <br />
                        <span>재직날짜</span>2019. 12 ~ 재직중
                    </li>
                </ul>
            </div>
        ),
    },
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
                        <span>Etc</span>웹 접근성/표준성, 크로스 브라우징
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
