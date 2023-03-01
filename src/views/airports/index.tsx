import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store';
import Navigation from '../../components/navigation';
import { fetchData, getView } from '../../core/actions/data';
import { useAppDispatch } from '../../core/hooks';
import TableData from '../../components/table';

const Airports = () => {
    const dispatch = useAppDispatch();
    const data = useSelector((state: RootState) => state.dataReducer.data);

    useEffect(() => {
        if (!data.features.lentgh) dispatch(fetchData('airports'));
        dispatch(getView('airports'));
    }, []);

    return (
        <>
            <Navigation />
            <TableData />
        </>
    );
};

export default Airports;
