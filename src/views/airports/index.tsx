import React, { useEffect, useMemo, useState } from "react";
import Navigation from "../../components/navigation";
import { fetchData, getView } from "../../core/actions/data";
import { DataType } from "../../types/data";
import { useAppDispatch } from "../../core/hooks";
import TableData from "../../components/table";
import { useSelector } from "react-redux";
import { RootState } from "../../core/store";

const Airports = () => {
  const dispatch = useAppDispatch();
  const data = useSelector((state: RootState) => state.dataReducer.data);

  useEffect(() => {
    if (!data.features.lentgh) dispatch(fetchData("airports"));
    dispatch(getView("airports"));
  }, []);

  return (
    <>
      <Navigation />
      <TableData />
    </>
  );
};

export default Airports;
