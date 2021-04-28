import style from '../styles/page/indexPage.module.scss';

import { ReactComponent as IcoLogo } from 'public/icons/ico-logo.svg';
import { ReactComponent as IcoDate } from 'public/icons/ico-date.svg';
import { ReactComponent as IcoPart } from 'public/icons/ico-part.svg';
import { ReactComponent as IcoName } from 'public/icons/ico-Name.svg';

export default function indexPage() {
    return (
        <div className={style.indexPage}>
            <div className='group'>
                <div className={style.layer}>
                    <div className={style.part__title}>
                        <h1>
                            <IcoLogo />
                        </h1>
                        <div className={style.item__date}>
                            <IcoDate />
                        </div>
                        <div className={style.item__part}>
                            <IcoPart />
                        </div>
                        <div className={style.item__name}>
                            <IcoName />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
