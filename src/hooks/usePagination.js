import { useMemo } from "react";

export const usePagination = (componentData, currentPage, PAGE_SIZE) => {
  return useMemo(() => {
    const totalPages = Math.ceil(componentData.length / PAGE_SIZE);
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    return { totalPages, start, end };
  }, [componentData, currentPage, PAGE_SIZE]);
};
