import {useMemo, useState} from "react";

const usePaginate = (data, pageSize) => {
    const pageCount = Math.ceil(data?.length / pageSize);

    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const pageData = useMemo(() => {
        const firstPageIndex = (page - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [page, data, pageSize]);

    return [pageData, page, handleChange, pageCount];
};

export default usePaginate;
