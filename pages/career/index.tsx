import { Frame, Substance } from '@components/common';
import Link from 'next/link';
import { useState } from 'react';

import style from '../../styles/page/career/career.module.scss';

function onClickPath(url: string) {
    url && window.open(url, '_ blank');
}

const menus: listType[] = [
    {
        title: '서울 교육청 도서관',
        subtitle: (
            <>
                <p>대표 디자인 5개 퍼블리싱 및 가이드 제작</p>
                <p>반응형 및 크로스 브라우징</p>
                <p>웹 접근성 인증 마크 취득 및 갱신</p>
                <p>하위 28개 사이트 유지보수</p>
                <p>HTML, JSP, Css, JS, jQuery</p>
            </>
        ),
        content: (
            <div>
                <ul className={style.career__list}>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://jdlib.sen.go.kr/jdlib/index.do'
                                )
                            }
                        >
                            <img src='/images/lib-00.png' />
                            <span>서울 정독 도서관</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://gnlib.sen.go.kr/gnlib/index.do'
                                )
                            }
                        >
                            <img src='/images/lib-01.png' />
                            <span>서울 강남 도서관</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://grlib.sen.go.kr/grlib/index.do'
                                )
                            }
                        >
                            <img src='/images/lib-02.png' />
                            <span>서울 구로 도서관</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://ahyon.sen.go.kr/ahyon/index.do'
                                )
                            }
                        >
                            <img src='/images/lib-03.png' />
                            <span>서울 마포평생학습관</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://gslib.sen.go.kr/gslib/index.do'
                                )
                            }
                        >
                            <img src='/images/lib-05.png' />
                            <span>서울 강서 도서관</span>
                        </button>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        title: '인천 교육청 도서관',
        subtitle: (
            <>
                <p>대표 디자인 3개 퍼블리싱 및 가이드 제작</p>
                <p>반응형 및 크로스 브라우징</p>
                <p>하위 12개 사이트 유지보수</p>
                <p>HTML, JSP, Css, JS, jQuery</p>
            </>
        ),
        content: (
            <div>
                <ul className={style.career__list}>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://ahyon.sen.go.kr/ahyon/index.do'
                                )
                            }
                        >
                            <img src='/images/lib-ic-01.png' />
                            <span>인천 서구도서관</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://ahyon.sen.go.kr/ahyon/index.do'
                                )
                            }
                        >
                            <img src='/images/lib-ic-02.png' />
                            <span>인천 연수도서관</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://ahyon.sen.go.kr/ahyon/index.do'
                                )
                            }
                        >
                            <img src='/images/lib-ic-03.png' />
                            <span>인천 통합공공도서관</span>
                        </button>
                    </li>
                    <li>
                        {' '}
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://ahyon.sen.go.kr/ahyon/index.do'
                                )
                            }
                        >
                            <img src='/images/lib-ic-04.png' />
                            <span>인천 통합공공도서관</span>
                        </button>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        title: '경상북도 교육청 도서관',
        subtitle: (
            <>
                <p>퍼블리싱 유지보수</p>
                <p>웹 접근성 인증 마크 갱신</p>
                <p>하위 18개 사이트 유지보수</p>
                <p>HTML, JSP, Css, JS, jQuery</p>
            </>
        ),
        content: (
            <div>
                <ul className={style.career__list}>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'http://www.gbelib.kr/geic/index.do'
                                )
                            }
                        >
                            <img src='/images/lib-ks-01.png' />
                            <span>경상북도 교육청 정보센터</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'http://www.gbelib.kr/gbelib/index.do'
                                )
                            }
                        >
                            <img src='/images/lib-ks-02.png' />
                            <span>경상북도 교육청 도서관</span>
                        </button>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        title: '원자력환경공단',
        subtitle: (
            <>
                <p>한글 영문 사이트 퍼블리싱</p>
                <p>반응형 및 크로스 브라우징</p>
                <p>웹 접근성 인증 마크 취득 및 갱신</p>
                <p>하위 18개 사이트 유지보수</p>
                <p>HTML, JSP, Css, JS, jQuery</p>
            </>
        ),
        content: (
            <div>
                <ul className={style.career__list}>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://www.korad.or.kr/korad/index.do'
                                )
                            }
                        >
                            <img src='/images/korad-01.png' />
                            <span>한국 원자력 환경 공단</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://www.korad.or.kr/korad-eng/index.do'
                                )
                            }
                        >
                            <img src='/images/korad-01.png' />
                            <span>한국 원자력 환경 공단(영문)</span>
                        </button>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        title: '사용후핵연료 관리정책 재검토위원회',
        subtitle: (
            <>
                <p>퍼블리싱, effect 부분 프론트 엔드 작업</p>
                <p>반응형 및 크로스 브라우징</p>
                <p>HTML, JSP, Css, JS, jQuery</p>
            </>
        ),
        content: (
            <div>
                <ul className={style.career__list}>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://www.hlwpolicy.go.kr/hlwp/index.do'
                                )
                            }
                        >
                            <img src='/images/korad-03.png' />
                            <span>사용후핵연료 관리정책 재검토 위원회</span>
                        </button>
                    </li>
                </ul>
            </div>
        ),
    },
];

export default function career() {
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
