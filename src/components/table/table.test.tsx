import { render, screen } from '@testing-library/react';
import TableData from '.';
import { Provider } from 'react-redux';
import store from '../../core/store';

test('test table rows', () => {
    render(
        <Provider store={store}>
            <TableData />
        </Provider>
    );
    const setup = () => {
        const th = screen.queryAllByTestId('test-header-cell') as HTMLTableElement[];
        const rows = screen.queryAllByTestId('test-header-row') as HTMLTableElement[];
        return {
            th,
            rows
        };
    };
    const { th, rows } = setup();
    const view = store.getState().dataReducer.view;
    const features = store.getState().dataReducer.data.features;
    expect(rows as HTMLElement[]).toHaveLength(features.length);
    expect(th as HTMLElement[]).toHaveLength(4);

    if (view === 'airports') {
        expect(th[1].textContent).toEqual('COUNTRY');
    } else {
        expect(th[1].textContent).toEqual('CITY');
    }
});
