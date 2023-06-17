import {useEffect, useRef} from "react";

const useMountHandler = () => {
    const mountHandler = () => {
        let mounted = true;
        const execute = (callback) => {
            if (mounted) {
                callback?.();
            }
        };
        const unMount = () => {
            mounted = false;
        };
        return {execute, unMount};
    };
    const ref = useRef(mountHandler());
    useEffect(() => {
        const handler = ref.current;
        return handler.unMount();
    }, []);

    return ref.current;
};

export default useMountHandler;
