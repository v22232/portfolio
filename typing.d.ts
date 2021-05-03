declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement>
    >;

    const src: string;
    export default src;
}

declare type listType = {
    title?: string;
    subtitle?: React.HTMLAttributes;
    content?: React.HTMLAttributes;
};
