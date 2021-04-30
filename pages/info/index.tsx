import { Frame } from '@components/common';

import style from '../../styles/page/info/info.module.scss';

export default function info() {
    return (
        <Frame mode='sub'>
            <div className={style.Info}>
                <div className='grid'>
                    <div className={style.number}>
                        <span>01</span>
                    </div>
                    <div className={style.title}>title</div>
                    <div className={style.content}>test</div>
                </div>
                <div className='grid'>
                    <div className={style.number}>
                        <span>01</span>
                    </div>
                    <div className={style.title}>title</div>
                    <div className={style.content}>test</div>
                </div>
                <div className='grid'>
                    <div className={style.number}>
                        <span>01</span>
                    </div>
                    <div className={style.title}>title</div>
                    <div className={style.content}>test</div>
                </div>
            </div>
        </Frame>
    );
}
