import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import EnhancedTableHead from './EnhancedTableHead';

const headers = [
    {
        id: 1,
        label: 'first test'    
    },
    {
        id: 2,
        label: 'second test'    
    },
]


test('renders content', () => {
    const component = render(<EnhancedTableHead order={'asc'} orderBy={'desc'} onRequestSort={() => { console.log('sorting')}} headCells={headers} />);
    console.log(component);
});

test('component renders correct headers', () => {
    const component = render(<EnhancedTableHead order={'asc'} orderBy={'desc'} onRequestSort={() => { console.log('sorting')}} headCells={headers} />);
    component.getByText('first test');
    component.getByText('second test');
});

test('component renders correct amount of th', () => {
    const component = render(<EnhancedTableHead order={'asc'} orderBy={'desc'} onRequestSort={() => { console.log('sorting')}} headCells={headers} />);
    const headcells = component.getAllByRole('columnheader')
    expect(headcells).toHaveLength(2);
});

test('component renders correct amount of renderized rows', () => {
    const component = render(<EnhancedTableHead order={'asc'} orderBy={'desc'} onRequestSort={() => { console.log('sorting')}} headCells={headers} />);
    const rows = component.getAllByRole('row')
    expect(rows).toHaveLength(1);
});