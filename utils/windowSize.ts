import { useEffect, useLayoutEffect, useState } from "react";

const canUseDOM: boolean = !!(
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'
);

const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

function useWindowSize() {
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useIsomorphicLayoutEffect(() => {
        function updateWidthSize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateWidthSize);
        updateWidthSize();
        return () => window.removeEventListener('resize', updateWidthSize);
    }, []);

    return windowWidth;
}

export default useWindowSize;