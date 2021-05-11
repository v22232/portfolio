import { Frame, Substance } from '@components/common';
import { useState } from 'react';

import style from '../../styles/page/project/project.module.scss';

function onClickPath(url: string) {
    url && window.open(url, '_ blank');
}

const menus: listType[] = [
    {
        title: '영플립',
        subtitle: (
            <>
                <p>퍼블리싱 및 프론트엔드</p>
                <p>반응형 및 크로스 브라우징</p>
                <p>storybook 작업으로 모듈화 및 재사용</p>
                <p>Css, Scss, React, Typescript</p>
            </>
        ),
        content: (
            <ul className={style.career__list}>
                <li>
                    <button onClick={() => onClickPath('https://engflip.com')}>
                        <img src='/images/academy-01.png' />
                        <span>영플립</span>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => onClickPath('https://stage.engflip.com')}
                    >
                        <img src='/images/academy-02.png' />
                        <span>영플립-로그인</span>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => onClickPath('/images/academy-04.png')}
                    >
                        <img src='/images/academy-04.png' />
                        <span>영플립-회원</span>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => onClickPath('/images/academy-03.png')}
                    >
                        <img src='/images/academy-03.png' />
                        <span>영플립-LMS</span>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => onClickPath('/images/academy-06.png')}
                    >
                        <img src='/images/academy-06.png' />
                        <span>영플립-CMS</span>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => onClickPath('/images/academy-07.png')}
                    >
                        <img src='/images/academy-07.png' />
                        <span>영플립-CMS-등록</span>
                    </button>
                </li>
            </ul>
        ),
    },
    {
        title: '머니트레이너',
        subtitle: (
            <>
                <p>디자인, 퍼블리싱, 프론트엔드, 백엔드</p>
                <p>반응형 및 크로스 브라우징</p>
                <p>Css, Scss, Js, jQuery, node.js/Express, mySql</p>
                <p>카카오 Rest ApI 회원 가입</p>
            </>
        ),
        content: (
            <ul className={style.career__list}>
                <li>
                    <button
                        onClick={() => onClickPath('http://moneytrainer.com')}
                    >
                        <img src='/images/money-01.png' />
                        <span>머니트레이너</span>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() =>
                            onClickPath(
                                'http://moneytrainer.com/sub/contents/bookIntro'
                            )
                        }
                    >
                        <img src='/images/money-02.png' />
                        <span>정적페이지</span>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() =>
                            onClickPath(
                                'http://moneytrainer.com/sub/event/finish/page1'
                            )
                        }
                    >
                        <img src='/images/money-03.png' />
                        <span>리스트-스크롤페이징</span>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() =>
                            onClickPath(
                                'http://moneytrainer.com/sub/board/all/page1'
                            )
                        }
                    >
                        <img src='/images/money-04.png' />
                        <span>리스트-테이블&탭메뉴</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => onClickPath('/images/money-05.png')}>
                        <img src='/images/money-05.png' />
                        <span>관리자-등록-이벤트</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => onClickPath('/images/money-06.png')}>
                        <img src='/images/money-06.png' />
                        <span>관리자-등록-게시판</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => onClickPath('/images/money-07.png')}>
                        <img src='/images/money-07.png' />
                        <span>관리자-등록-유튜브</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => onClickPath('/images/money-08.png')}>
                        <img src='/images/money-08.png' />
                        <span>관리자-회원관리</span>
                    </button>
                </li>
            </ul>
        ),
    },
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
                                'https://gslib.sen.go.kr/gslib/index.do'
                            )
                        }
                    >
                        <img src='/images/lib-05.png' />
                        <span>서울 강서 도서관</span>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() =>
                            onClickPath(
                                'https://yslib.sen.go.kr/yslib/index.do'
                            )
                        }
                    >
                        <img src='/images/lib-06.png' />
                        <span>서울 용산 도서관</span>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() =>
                            onClickPath(
                                'https://djlib.sen.go.kr/djlib/index.do'
                            )
                        }
                    >
                        <img src='/images/lib-07.png' />
                        <span>서울 동작 도서관</span>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() =>
                            onClickPath(
                                'https://djlib.sen.go.kr/djlib/index.do'
                            )
                        }
                    >
                        <img src='/images/lib-08.png' />
                        <span>서울 동작 도서관</span>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() =>
                            onClickPath(
                                'https://gdlib.sen.go.kr/gdlib/index.do'
                            )
                        }
                    >
                        <img src='/images/lib-09.png' />
                        <span>서울 강동 도서관</span>
                    </button>
                </li>
            </ul>
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
                                    'https://lib.ice.go.kr/seogu/index.do'
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
                                    'https://lib.ice.go.kr/yeonsu/index.do'
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
                                    'https://lib.ice.go.kr/ice/index.do'
                                )
                            }
                        >
                            <img src='/images/lib-ic-03.png' />
                            <span>인천 통합공공도서관</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://lib.ice.go.kr/bupyeong/index.do'
                                )
                            }
                        >
                            <img src='/images/lib-ic-04.png' />
                            <span>인천 부평도서관</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://lib.ice.go.kr/jungang/index.do'
                                )
                            }
                        >
                            <img src='/images/lib-ic-04.png' />
                            <span>인천 중앙도서관</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://lib.ice.go.kr/juan/index.do'
                                )
                            }
                        >
                            <img src='/images/lib-ic-04.png' />
                            <span>인천 주안도서관</span>
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
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'http://www.gbelib.kr/sjhr/index.do'
                                )
                            }
                        >
                            <img src='/images/lib-ks-03.png' />
                            <span>경상북도 상주 화령분관 도서관</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath('http://www.gbelib.kr/cd/index.do')
                            }
                        >
                            <img src='/images/lib-ks-04.png' />
                            <span>경상북도 청도 도서관</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath('http://www.gbelib.kr/yy/index.do')
                            }
                        >
                            <img src='/images/lib-ks-05.png' />
                            <span>경상북도 영양 도서관</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath('http://www.gbelib.kr/yd/index.do')
                            }
                        >
                            <img src='/images/lib-ks-06.png' />
                            <span>경상북도 영덕 도서관</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath('http://www.gbelib.kr/sj/index.do')
                            }
                        >
                            <img src='/images/lib-ks-07.png' />
                            <span>경상북도 상주 도서관</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath('http://www.gbelib.kr/yj/index.do')
                            }
                        >
                            <img src='/images/lib-ks-08.png' />
                            <span>경상북도 영주 선비 도서관</span>
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
                            <img src='/images/korad-02.png' />
                            <span>한국 원자력 환경 공단(영문)</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://www.korad.or.kr/korad/board/index.do?menu_idx=51&manage_idx=72'
                                )
                            }
                        >
                            <img src='/images/korad-03.png' />
                            <span>서브페이지-용어검색</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://www.korad.or.kr/korad/html.do?menu_idx=135'
                                )
                            }
                        >
                            <img src='/images/korad-04.png' />
                            <span>서브페이지-탭 메뉴</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://www.korad.or.kr/korad/board/index.do?menu_idx=87&manage_idx=41'
                                )
                            }
                        >
                            <img src='/images/korad-05.png' />
                            <span>서브페이지-리스트(테이블)</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://www.korad.or.kr/korad/board/index.do?menu_idx=278&manage_idx=55'
                                )
                            }
                        >
                            <img src='/images/korad-06.png' />
                            <span>서브페이지-리스트(갤러리)</span>
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
                            <img src='/images/bpm-01.png' />
                            <span>사용후핵연료 관리정책 재검토 위원회</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://www.hlwpolicy.go.kr/hlwp/sitemap/index.do?menu_idx=20'
                                )
                            }
                        >
                            <img src='/images/bpm-02.png' />
                            <span>서브페이지-사이트 맵</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://www.hlwpolicy.go.kr/hlwp/board/index.do?menu_idx=13&manage_idx=101'
                                )
                            }
                        >
                            <img src='/images/bpm-03.png' />
                            <span>서브페이지-리스트(테이블)</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                onClickPath(
                                    'https://www.hlwpolicy.go.kr/hlwp/html.do?menu_idx=5'
                                )
                            }
                        >
                            <img src='/images/bpm-04.png' />
                            <span>서브페이지-정적페이지</span>
                        </button>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        title: 'ETC',
        content: (
            <div>
                <ul>
                    <li>
                        <span>그 외 작업 비인가 사이트</span>
                        교육넷, 한국전력공사 등 공공 기관 위주의 단기 프로젝트
                        작업.
                    </li>
                    <li>
                        대규모 사이트 위주의 작업을 해왔으며 전자정부프레임워크
                        기반의 프로젝트부터 소규모 사이트까지 많은 경험으로
                        디자인, 개발자 등 직군에 상관없이 원활한 소통으로 협업이
                        가능하며 디자인에 필요한 기본 툴인 photoshop,
                        illustrator이 사용가능하고 협업에 필요한 git 사용이
                        가능합니다.
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
            <Substance list={menus} lendering />
        </Frame>
    );
}
