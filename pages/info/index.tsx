import { Frame, Substance } from '@components/common';
import { useEffect, useState } from 'react';

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
                        <span>생년월일</span>1990.09.18
                    </li>
                    <li>
                        <span>주소</span>대구 중구
                    </li>
                    <li>
                        <span>E-mail</span>bettykim3771@gmail.com
                    </li>
                    <li>
                        <span>가치관</span>
                        <b>
                            견고한 UI, 기억에 남는 UX, 깔끔하고 간결한 코딩,
                            재사용이 가능한 모듈화
                        </b>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        title: 'Career',
        subtitle: <p>5년차 퍼블리셔, 프론트엔드</p>,
        content: (
            <div className={style.infoList}>
                <ul>
                    <li>
                        <span>웨일소프트</span>퍼블리싱, 프론트엔드
                        <br />
                        <span>주요사업</span>공공기관(대규모 웹 사이트)
                        <br />
                        <span>재직날짜</span>2017. 06 ~ 2020. 12
                        <br />
                        <br />
                    </li>
                    <li>
                        <span>손스소프트</span>퍼블리싱, 프론트엔드, 백엔드
                        <br />
                        <span>주요사업</span>교육 사이트, CMS, LMS
                        <br />
                        <span>재직날짜</span>2019. 12 ~ 2020.10
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
            <Substance list={menus} numberling={false} heightAuto/>
        </Frame>
    );
}
