import React, { useEffect, useMemo, useState } from "react";
import Navigation from '../../components/navigation';
import { getAirportsData } from "../../services/airports";
import Table from "../../components/table";

const Airports = () => {
    const [data, setData] = useState(null)
    console.log({ getAirportsData });
    const getData = async() => { 
        const data = await getAirportsData();
        setData(data.data.features)
        console.log({data})
        return data
    }

    useEffect(() => {
        if(!data) getData();
    }, [])
    return (
    <>
    <Navigation currentView={'Airports'} />
     <p>airports</p>
    <Table />
    </>
)};

export default Airports