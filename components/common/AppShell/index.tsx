import { PropsWithChildren } from 'react';

import style from './AppShell.module.scss';

export default function AppShell({ children }: PropsWithChildren<{}>) {
    return <div className={style.AppShell}>{children}</div>;
}
