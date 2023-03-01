import React, { useEffect, useMemo, useState } from "react";
import Navigation from '../../components/navigation';
import { fetchData, getView } from '../../core/actions/data';
import { DataType } from "../../types/data";
import { useAppDispatch } from '../../core/hooks';
import Table from "../../components/table";
import { useSelector } from "react-redux";

const Stadiums = () => {
    const dispatch = useAppDispatch();
    const data = useSelector((state: DataType) => state.features);
    const [pageData, setData] = useState(data);
    const [view, setView] = useState('stadiums');
 

    useEffect(() => {
        if(!pageData) dispatch(fetchData(view));
        dispatch(getView(view));
    }, [])
    return (
    <>
    <Navigation currentView={'Airports'} />
     <p>stadiums</p>
    <Table />
    </>
)};

export default Stadiums