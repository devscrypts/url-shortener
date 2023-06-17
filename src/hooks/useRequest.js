import axios from "axios";
import {useState, useEffect} from "react";
import useMountHandler from "hooks/useMountHandler";

class Http {
    constructor() {
        this.controller = new AbortController();

        this.request = axios.create({
            paramsSerializer: {indexes: true},
            signal: this.controller.signal
        });
    }

    cancel() {
        this.controller.abort();
    }

    isCancel(error) {
        return axios.isCancel(error);
    }
}

/**
 * Request hook
 *
 * @returns {[axios, boolean]}
 */
export const useRequest = () => {
    const handler = useMountHandler();
    const [loading, setLoading] = useState(false);
    const [service] = useState(() => new Http());

    useEffect(() => {
        return () => service.cancel();
    }, [service]);

    useEffect(() => {
        const interceptors = service.request.interceptors;

        const requestInterceptor = interceptors.request.use((config) => {
            handler.execute(() => setLoading(true));

            return config;
        });

        const responseInterceptor = interceptors.response.use(
            ({data}) => {
                handler.execute(() => setLoading(false));

                return data;
            },
            (error) => {
                handler.execute(() => setLoading(false));

                error.canceled = service.isCancel(error);

                return Promise.reject(error);
            }
        );

        return () => {
            interceptors.response.eject(responseInterceptor);
            interceptors.request.eject(requestInterceptor);
        };
    }, [service, handler]);

    return [service.request, loading];
};
