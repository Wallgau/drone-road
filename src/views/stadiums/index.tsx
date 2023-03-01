import { useEffect } from 'react';
import Navigation from '../../components/navigation';
import { fetchData, getView } from '../../core/actions/data';
import { useAppDispatch } from '../../core/hooks';
import TableData from '../../components/table';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store';

const Stadiums = () => {
    const dispatch = useAppDispatch();
    const data = useSelector((state: RootState) => state.dataReducer.data);

    useEffect(() => {
        if (!data.features.lentgh) dispatch(fetchData('stadiums'));
        dispatch(getView('stadiums'));
    }, []);
    return (
        <>
            <Navigation />
            <TableData />
        </>
    );
};

export default Stadiums;
