"use client";

import React from "react";
import Pagination from "react-js-pagination";
import { useSearchParams, useRouter } from "next/navigation";

interface Props {
  resPerPage: number;
  filteredRoomsCount: number;
}

const CustomPagination = ({ resPerPage, filteredRoomsCount }: Props) => {
  const router = useRouter();

  const searchParams = useSearchParams();   //nextjs useSearchPrams can not used for get but to set we have to use Native one. Which we used -       queryParams = new URLSearchParams(window.location.search);
  let page = searchParams.get("page") || 1;
  page = Number(page);

  let queryParams;

  const handlePageChange = (currentPage: string) => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
      console.log(queryParams, "queryPatrams")

      if (queryParams.has("page")) {
        queryParams.set("page", currentPage);
      } else {
        queryParams.append("page", currentPage);
      }

      const path = `${window.location.pathname}?${queryParams.toString()}`;
      console.log(window.location.pathname, queryParams.toString() )
      router.push(path);
    }
  };
  return (
    <div>
      {resPerPage < filteredRoomsCount && (
        <div className="d-flex justify-content-center mt-5">
          <Pagination
            activePage={page}
            itemsCountPerPage={resPerPage}
            totalItemsCount={filteredRoomsCount}
            onChange={handlePageChange}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="page-item" //custome CSS
            linkClass="page-link"  //custom Css
          />
        </div>
      )}
    </div>
  );
};

export default CustomPagination;